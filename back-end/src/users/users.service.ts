import { HttpStatus, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Response } from 'express';
import mongoose, { Model } from 'mongoose';
import { Users,UsersDocument } from '../schema/users.schema';
import { SignupUsersDto } from './dto/signup.dto';
import { SigninUsersDto } from './dto/signin.dto';
import { UsersDto } from './dto/users.dto';
import * as bcrypt from 'bcrypt';
import * as jwt from 'jsonwebtoken';
import { ChangePasswordDto } from './dto/changePassword.dto';
import { EditProfileDto } from './dto/editProfile.dto';

@Injectable()
export class UsersService {
    constructor(@InjectModel(Users.name) private readonly usersModel: Model<UsersDocument>) {}

    secret = 'test';

    async findAll(): Promise<Users[]> {
        return await this.usersModel.find().exec();
      }
    
    async findOne(id: string, response: Response): Promise<Users | Object> {
      if(!mongoose.Types.ObjectId.isValid(id))
        return response.status(HttpStatus.BAD_REQUEST).json({ message: "Invalid account" });
      const result = await this.usersModel.findById(id);
      if(!result)
        return response.status(HttpStatus.BAD_REQUEST).json({ message: "Invalid account" });
      return response.status(HttpStatus.OK).json({ result,message: "User found successfully" });
      }
    
    async signup(signupUsersDto: SignupUsersDto,response:Response): Promise<Users | Object> {
      try{
        const {firstName,lastName,email,telephone,password,googleId} = signupUsersDto;
        if(!firstName)
          return response.status(HttpStatus.BAD_REQUEST).json({ message: "FirstName is required" });
        if(firstName.length < 3)
          return response.status(HttpStatus.BAD_REQUEST).json({ message: "FirstName should contain at least 3 characters" });
        if(!lastName)
          return response.status(HttpStatus.BAD_REQUEST).json({ message: "LastName is required" });
        if(lastName.length < 3)
          return response.status(HttpStatus.BAD_REQUEST).json({ message: "LastName should contain at least 3 characters" });
        if(!email)
          return response.status(HttpStatus.BAD_REQUEST).json({ message: "Email is required" });
        if(email.length < 10)
          return response.status(HttpStatus.BAD_REQUEST).json({ message: "Email should contain at least 10 characters" });
        let oldUser = await this.usersModel.findOne({ email });
        if (oldUser)
          return response.status(HttpStatus.BAD_REQUEST).json({ message: "Email is already used" });
        if(!telephone)
          return response.status(HttpStatus.BAD_REQUEST).json({ message: "Telephone number is required" });
        if(telephone.length !== 8)
          return response.status(HttpStatus.BAD_REQUEST).json({ message: "Telephone number should contain 8 characters" });
        oldUser = await this.usersModel.findOne({ telephone });
        if (oldUser)
          return response.status(HttpStatus.BAD_REQUEST).json({ message: "Telephone number is already used" });
        oldUser = await this.usersModel.findOne({ googleId });
        if (googleId && oldUser)
          return response.status(HttpStatus.BAD_REQUEST).json({ message: "Google Id is already exist" });
          let result:SignupUsersDto;
        if(password){
          if(password.length < 8)
            return response.status(HttpStatus.BAD_REQUEST).json({ message: "Password should contain at least 8 characters" });
          const hashedPassword = await bcrypt.hash(password, 12);
          result = await this.usersModel.create({
              ...signupUsersDto,
              password: hashedPassword
          });
        }
        else 
          result = await this.usersModel.create(signupUsersDto);
        const token = jwt.sign({
            email: result.email,
            id: result._id,
        },
            this.secret, {
            expiresIn: "24h"
        }
        );
        return response.status(HttpStatus.CREATED).json({ result, token });
      }
      catch(err:any){
        console.log(err);
        response
          .status(HttpStatus.INTERNAL_SERVER_ERROR)
          .json({ message: "Something went wrong",err });
      }
      }
    
    async signin(signinUsersDto: SigninUsersDto,response:Response): Promise<Users | Object> {
      const { emailTelephone, password } = signinUsersDto;
      try {
          if(!emailTelephone)
            return response.status(HttpStatus.BAD_REQUEST).json({ message: "Email or telephone number is required" });
          if(!password)
            return response.status(HttpStatus.BAD_REQUEST).json({ message: "Password is required" });
          let oldUser:UsersDto;
          oldUser = await this.usersModel.findOne({$or:[{telephone: emailTelephone}, {email: emailTelephone}]});
          if (!oldUser)
              return response.status(HttpStatus.BAD_REQUEST).json({ message: "User doesn't exist" });
          const isPasswordCorrect: boolean = await bcrypt.compare(password, oldUser.password);
          if (!isPasswordCorrect)
              return response.status(HttpStatus.BAD_REQUEST).json({ message: "Incorrect Password" });
          const token = jwt.sign({
              email: oldUser.email,
              id: oldUser._id
          },
              this.secret, {
              expiresIn: "24h"
          }
          );
          response.status(HttpStatus.ACCEPTED).json({
              result: oldUser,
              token,
          });
      } catch (err) {
          response.status(HttpStatus.INTERNAL_SERVER_ERROR).json({ message: "Something went wrong" });
          console.log(err);
      }
    }

    async changePassword(id:string ,changePasswordDto:ChangePasswordDto ,response:Response): Promise<Object> {

      const { password, confirmPassword } = changePasswordDto;
      if(!mongoose.Types.ObjectId.isValid(id))
        return response.status(HttpStatus.BAD_REQUEST).json({ message: "Invalid account" });
      const user = await this.usersModel.findById(id);
      if(!user)
        return response.status(HttpStatus.BAD_REQUEST).json({ message: "Invalid account" });
      if(!password)
        return response.status(HttpStatus.BAD_REQUEST).json({ message: "Password is required" });
      if(password.length < 8)
        return response.status(HttpStatus.BAD_REQUEST).json({ message: "Password should contain at least 8 characters" });
      if(!confirmPassword)
        return response.status(HttpStatus.BAD_REQUEST).json({ message: "Confirm password is required" });
      if(password !== confirmPassword)
        return response.status(HttpStatus.BAD_REQUEST).json({ message: "You should confirm your password" });
      else {
        const hashedPassword = await bcrypt.hash(password, 12);
        let result:UsersDto;
        result = await this.usersModel.findByIdAndUpdate(id,{ password: hashedPassword });
        return response.status(HttpStatus.OK).json({ result, message: "Password changed successfully" });
      }
    }

    async editProfile(id:string ,editProfileDto: EditProfileDto ,response:Response): Promise<Object> {
      const {} = editProfileDto;
      if(!mongoose.Types.ObjectId.isValid(id))
        return response.status(HttpStatus.BAD_REQUEST).json({ message: "Invalid account" });
      const user = await this.usersModel.findById(id);
      if(!user)
        return response.status(HttpStatus.BAD_REQUEST).json({ message: "Invalid account" });
      let result:UsersDto;
      result = await this.usersModel.findByIdAndUpdate(id,editProfileDto);
      return response.status(HttpStatus.OK).json({ result, message: "Image changed successfully" });
    }

    async verifyAccount(id:string ,response:Response): Promise<Object> {
      if(!mongoose.Types.ObjectId.isValid(id))
        return response.status(HttpStatus.BAD_REQUEST).json({ message: "Invalid account" });
      const user = await this.usersModel.findById(id);
      if(!user)
        return response.status(HttpStatus.BAD_REQUEST).json({ message: "Invalid account" });
      if(user.verified)
        return response.status(HttpStatus.BAD_REQUEST).json({ message: "Account is already verified" });
      let result:UsersDto;
      result = await this.usersModel.findByIdAndUpdate(id,{ verified: true });
      return response.status(HttpStatus.OK).json({ result, message: "Account verified successfully" });
    }
    
    async delete(id: string, response: Response): Promise<Users | Object> {
      if(!mongoose.Types.ObjectId.isValid(id))
        return response.status(HttpStatus.BAD_REQUEST).json({ message: "Invalid account" });
      const result = await this.usersModel.findByIdAndDelete(id);
      if(!result)
        return response.status(HttpStatus.BAD_REQUEST).json({ message: "Invalid account" });
      return response.status(HttpStatus.OK).json({ result,message: "Account deleted successfully" });
      }
    
    async deleteAll(): Promise<Users> {
        return await this.usersModel.remove().exec();
      }

}
