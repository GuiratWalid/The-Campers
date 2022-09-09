"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsersService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const users_schema_1 = require("../schema/users.schema");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
let UsersService = class UsersService {
    constructor(usersModel) {
        this.usersModel = usersModel;
        this.secret = 'test';
    }
    async findAll() {
        return await this.usersModel.find().exec();
    }
    async findOne(id, response) {
        if (!mongoose_2.default.Types.ObjectId.isValid(id))
            return response.status(common_1.HttpStatus.BAD_REQUEST).json({ message: "Invalid account" });
        const result = await this.usersModel.findById(id);
        if (!result)
            return response.status(common_1.HttpStatus.BAD_REQUEST).json({ message: "Invalid account" });
        return response.status(common_1.HttpStatus.OK).json({ result, message: "User found successfully" });
    }
    async signup(signupUsersDto, response) {
        try {
            const { firstName, lastName, email, telephone, password, googleId } = signupUsersDto;
            if (!firstName)
                return response.status(common_1.HttpStatus.BAD_REQUEST).json({ message: "FirstName is required" });
            if (firstName.length < 3)
                return response.status(common_1.HttpStatus.BAD_REQUEST).json({ message: "FirstName should contain at least 3 characters" });
            if (!lastName)
                return response.status(common_1.HttpStatus.BAD_REQUEST).json({ message: "LastName is required" });
            if (lastName.length < 3)
                return response.status(common_1.HttpStatus.BAD_REQUEST).json({ message: "LastName should contain at least 3 characters" });
            if (!email)
                return response.status(common_1.HttpStatus.BAD_REQUEST).json({ message: "Email is required" });
            if (email.length < 10)
                return response.status(common_1.HttpStatus.BAD_REQUEST).json({ message: "Email should contain at least 10 characters" });
            let oldUser = await this.usersModel.findOne({ email });
            if (oldUser)
                return response.status(common_1.HttpStatus.BAD_REQUEST).json({ message: "Email is already used" });
            if (!telephone)
                return response.status(common_1.HttpStatus.BAD_REQUEST).json({ message: "Telephone number is required" });
            if (telephone.length !== 8)
                return response.status(common_1.HttpStatus.BAD_REQUEST).json({ message: "Telephone number should contain 8 characters" });
            oldUser = await this.usersModel.findOne({ telephone });
            if (oldUser)
                return response.status(common_1.HttpStatus.BAD_REQUEST).json({ message: "Telephone number is already used" });
            oldUser = await this.usersModel.findOne({ googleId });
            if (googleId && oldUser)
                return response.status(common_1.HttpStatus.BAD_REQUEST).json({ message: "Google Id is already exist" });
            let result;
            if (password) {
                if (password.length < 8)
                    return response.status(common_1.HttpStatus.BAD_REQUEST).json({ message: "Password should contain at least 8 characters" });
                const hashedPassword = await bcrypt.hash(password, 12);
                result = await this.usersModel.create(Object.assign(Object.assign({}, signupUsersDto), { password: hashedPassword }));
            }
            else
                result = await this.usersModel.create(signupUsersDto);
            const token = jwt.sign({
                email: result.email,
                id: result._id,
            }, this.secret, {
                expiresIn: "24h"
            });
            return response.status(common_1.HttpStatus.CREATED).json({ result, token });
        }
        catch (err) {
            console.log(err);
            response
                .status(common_1.HttpStatus.INTERNAL_SERVER_ERROR)
                .json({ message: "Something went wrong", err });
        }
    }
    async signin(signinUsersDto, response) {
        const { emailTelephone, password } = signinUsersDto;
        try {
            if (!emailTelephone)
                return response.status(common_1.HttpStatus.BAD_REQUEST).json({ message: "Email or telephone number is required" });
            if (!password)
                return response.status(common_1.HttpStatus.BAD_REQUEST).json({ message: "Password is required" });
            let oldUser;
            oldUser = await this.usersModel.findOne({ $or: [{ telephone: emailTelephone }, { email: emailTelephone }] });
            if (!oldUser)
                return response.status(common_1.HttpStatus.BAD_REQUEST).json({ message: "User doesn't exist" });
            const isPasswordCorrect = await bcrypt.compare(password, oldUser.password);
            if (!isPasswordCorrect)
                return response.status(common_1.HttpStatus.BAD_REQUEST).json({ message: "Incorrect Password" });
            const token = jwt.sign({
                email: oldUser.email,
                id: oldUser._id
            }, this.secret, {
                expiresIn: "24h"
            });
            response.status(common_1.HttpStatus.ACCEPTED).json({
                result: oldUser,
                token,
            });
        }
        catch (err) {
            response.status(common_1.HttpStatus.INTERNAL_SERVER_ERROR).json({ message: "Something went wrong" });
            console.log(err);
        }
    }
    async changePassword(id, changePasswordDto, response) {
        const { password, confirmPassword } = changePasswordDto;
        if (!mongoose_2.default.Types.ObjectId.isValid(id))
            return response.status(common_1.HttpStatus.BAD_REQUEST).json({ message: "Invalid account" });
        const user = await this.usersModel.findById(id);
        if (!user)
            return response.status(common_1.HttpStatus.BAD_REQUEST).json({ message: "Invalid account" });
        if (!password)
            return response.status(common_1.HttpStatus.BAD_REQUEST).json({ message: "Password is required" });
        if (password.length < 8)
            return response.status(common_1.HttpStatus.BAD_REQUEST).json({ message: "Password should contain at least 8 characters" });
        if (!confirmPassword)
            return response.status(common_1.HttpStatus.BAD_REQUEST).json({ message: "Confirm password is required" });
        if (password !== confirmPassword)
            return response.status(common_1.HttpStatus.BAD_REQUEST).json({ message: "You should confirm your password" });
        else {
            const hashedPassword = await bcrypt.hash(password, 12);
            let result;
            result = await this.usersModel.findByIdAndUpdate(id, { password: hashedPassword });
            return response.status(common_1.HttpStatus.OK).json({ result, message: "Password changed successfully" });
        }
    }
    async editProfile(id, editProfileDto, response) {
        const {} = editProfileDto;
        if (!mongoose_2.default.Types.ObjectId.isValid(id))
            return response.status(common_1.HttpStatus.BAD_REQUEST).json({ message: "Invalid account" });
        const user = await this.usersModel.findById(id);
        if (!user)
            return response.status(common_1.HttpStatus.BAD_REQUEST).json({ message: "Invalid account" });
        let result;
        result = await this.usersModel.findByIdAndUpdate(id, editProfileDto);
        return response.status(common_1.HttpStatus.OK).json({ result, message: "Image changed successfully" });
    }
    async verifyAccount(id, response) {
        if (!mongoose_2.default.Types.ObjectId.isValid(id))
            return response.status(common_1.HttpStatus.BAD_REQUEST).json({ message: "Invalid account" });
        const user = await this.usersModel.findById(id);
        if (!user)
            return response.status(common_1.HttpStatus.BAD_REQUEST).json({ message: "Invalid account" });
        if (user.verified)
            return response.status(common_1.HttpStatus.BAD_REQUEST).json({ message: "Account is already verified" });
        let result;
        result = await this.usersModel.findByIdAndUpdate(id, { verified: true });
        return response.status(common_1.HttpStatus.OK).json({ result, message: "Account verified successfully" });
    }
    async delete(id, response) {
        if (!mongoose_2.default.Types.ObjectId.isValid(id))
            return response.status(common_1.HttpStatus.BAD_REQUEST).json({ message: "Invalid account" });
        const result = await this.usersModel.findByIdAndDelete(id);
        if (!result)
            return response.status(common_1.HttpStatus.BAD_REQUEST).json({ message: "Invalid account" });
        return response.status(common_1.HttpStatus.OK).json({ result, message: "Account deleted successfully" });
    }
    async deleteAll() {
        return await this.usersModel.remove().exec();
    }
};
UsersService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(users_schema_1.Users.name)),
    __metadata("design:paramtypes", [mongoose_2.Model])
], UsersService);
exports.UsersService = UsersService;
//# sourceMappingURL=users.service.js.map