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
exports.UsersController = void 0;
const common_1 = require("@nestjs/common");
const mail_service_1 = require("../mail/mail.service");
const users_schema_1 = require("../schema/users.schema");
const changePassword_dto_1 = require("./dto/changePassword.dto");
const editProfile_dto_1 = require("./dto/editProfile.dto");
const signin_dto_1 = require("./dto/signin.dto");
const signup_dto_1 = require("./dto/signup.dto");
const users_service_1 = require("./users.service");
let UsersController = class UsersController {
    constructor(service, mailService) {
        this.service = service;
        this.mailService = mailService;
    }
    async index() {
        return await this.service.findAll();
    }
    async find(id, response) {
        return await this.service.findOne(id, response);
    }
    async signup(signupUsersDto, response) {
        return await this.service.signup(signupUsersDto, response);
    }
    async signin(signinUsersDto, response) {
        return await this.service.signin(signinUsersDto, response);
    }
    async changePassword(id, changePasswordDto, response) {
        return await this.service.changePassword(id, changePasswordDto, response);
    }
    async changeImage(id, editProfileDto, response) {
        return await this.service.editProfile(id, editProfileDto, response);
    }
    async verifyAccount(id, response) {
        return await this.service.verifyAccount(id, response);
    }
    async delete(id, response) {
        return await this.service.delete(id, response);
    }
    async deleteAll() {
        return await this.service.deleteAll();
    }
    async mailing(users) {
        return await this.mailService.sendUserConfirmation(users);
    }
};
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], UsersController.prototype, "index", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", Promise)
], UsersController.prototype, "find", null);
__decorate([
    (0, common_1.Post)('signup'),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [signup_dto_1.SignupUsersDto, Object]),
    __metadata("design:returntype", Promise)
], UsersController.prototype, "signup", null);
__decorate([
    (0, common_1.Post)('signin'),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [signin_dto_1.SigninUsersDto, Object]),
    __metadata("design:returntype", Promise)
], UsersController.prototype, "signin", null);
__decorate([
    (0, common_1.Patch)('changePassword/:id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __param(2, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, changePassword_dto_1.ChangePasswordDto, Object]),
    __metadata("design:returntype", Promise)
], UsersController.prototype, "changePassword", null);
__decorate([
    (0, common_1.Patch)('editProfile/:id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __param(2, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, editProfile_dto_1.EditProfileDto, Object]),
    __metadata("design:returntype", Promise)
], UsersController.prototype, "changeImage", null);
__decorate([
    (0, common_1.Patch)('verifyaccount/:id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", Promise)
], UsersController.prototype, "verifyAccount", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", Promise)
], UsersController.prototype, "delete", null);
__decorate([
    (0, common_1.Delete)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], UsersController.prototype, "deleteAll", null);
__decorate([
    (0, common_1.Post)('mailing'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [users_schema_1.Users]),
    __metadata("design:returntype", Promise)
], UsersController.prototype, "mailing", null);
UsersController = __decorate([
    (0, common_1.Controller)('users'),
    __metadata("design:paramtypes", [users_service_1.UsersService, mail_service_1.MailService])
], UsersController);
exports.UsersController = UsersController;
//# sourceMappingURL=users.controller.js.map