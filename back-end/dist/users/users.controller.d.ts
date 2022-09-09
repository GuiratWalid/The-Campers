import { Response } from 'express';
import { MailService } from 'src/mail/mail.service';
import { Users } from 'src/schema/users.schema';
import { ChangePasswordDto } from './dto/changePassword.dto';
import { EditProfileDto } from './dto/editProfile.dto';
import { SigninUsersDto } from './dto/signin.dto';
import { SignupUsersDto } from './dto/signup.dto';
import { UsersService } from './users.service';
export declare class UsersController {
    private readonly service;
    private readonly mailService;
    constructor(service: UsersService, mailService: MailService);
    index(): Promise<Users[]>;
    find(id: string, response: Response): Promise<Object | Users>;
    signup(signupUsersDto: SignupUsersDto, response: Response): Promise<Object | Users>;
    signin(signinUsersDto: SigninUsersDto, response: Response): Promise<Object | Users>;
    changePassword(id: string, changePasswordDto: ChangePasswordDto, response: Response): Promise<Object>;
    changeImage(id: string, editProfileDto: EditProfileDto, response: Response): Promise<Object>;
    verifyAccount(id: string, response: Response): Promise<Object>;
    delete(id: string, response: Response): Promise<Object | Users>;
    deleteAll(): Promise<Users>;
    mailing(users: Users): Promise<void>;
}
