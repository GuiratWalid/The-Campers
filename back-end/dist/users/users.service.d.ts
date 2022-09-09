import { Response } from 'express';
import { Model } from 'mongoose';
import { Users, UsersDocument } from '../schema/users.schema';
import { SignupUsersDto } from './dto/signup.dto';
import { SigninUsersDto } from './dto/signin.dto';
import { ChangePasswordDto } from './dto/changePassword.dto';
import { EditProfileDto } from './dto/editProfile.dto';
export declare class UsersService {
    private readonly usersModel;
    constructor(usersModel: Model<UsersDocument>);
    secret: string;
    findAll(): Promise<Users[]>;
    findOne(id: string, response: Response): Promise<Users | Object>;
    signup(signupUsersDto: SignupUsersDto, response: Response): Promise<Users | Object>;
    signin(signinUsersDto: SigninUsersDto, response: Response): Promise<Users | Object>;
    changePassword(id: string, changePasswordDto: ChangePasswordDto, response: Response): Promise<Object>;
    editProfile(id: string, editProfileDto: EditProfileDto, response: Response): Promise<Object>;
    verifyAccount(id: string, response: Response): Promise<Object>;
    delete(id: string, response: Response): Promise<Users | Object>;
    deleteAll(): Promise<Users>;
}
