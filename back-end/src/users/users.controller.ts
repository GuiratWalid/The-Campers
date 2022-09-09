import { Body, Controller, Delete, Get, Param, Patch, Post, Res } from '@nestjs/common';
import { Response } from 'express';
import { MailService } from 'src/mail/mail.service';
import { Users } from 'src/schema/users.schema';
import { ChangePasswordDto } from './dto/changePassword.dto';
import { EditProfileDto } from './dto/editProfile.dto';
import { SigninUsersDto } from './dto/signin.dto';
import { SignupUsersDto } from './dto/signup.dto';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
    constructor(private readonly service: UsersService, private readonly mailService: MailService) {}

  @Get()
  async index() {
    return await this.service.findAll();
  }

  @Get(':id')
  async find(@Param('id') id: string,@Res() response:Response) {
    return await this.service.findOne(id,response);
  }

  @Post('signup')
  async signup(@Body() signupUsersDto: SignupUsersDto,@Res() response:Response) {
    return await this.service.signup(signupUsersDto,response);
  }

  @Post('signin')
  async signin(@Body() signinUsersDto: SigninUsersDto,@Res() response:Response) {
    return await this.service.signin(signinUsersDto,response);
  }

  @Patch('changePassword/:id')
  async changePassword(@Param('id') id: string, @Body() changePasswordDto: ChangePasswordDto,@Res() response:Response) {
    return await this.service.changePassword(id,changePasswordDto,response);
  }

  @Patch('editProfile/:id')
  async changeImage(@Param('id') id: string, @Body() editProfileDto:EditProfileDto,@Res() response:Response) {
    return await this.service.editProfile(id,editProfileDto,response);
  }

  @Patch('verifyaccount/:id')
  async verifyAccount(@Param('id') id: string,@Res() response:Response) {
    return await this.service.verifyAccount(id,response);
  }

  @Delete(':id')
  async delete(@Param('id') id: string,@Res() response:Response) {
    return await this.service.delete(id,response);
  }

  @Delete()
  async deleteAll() {
    return await this.service.deleteAll();
  }

  @Post('mailing')
  async mailing(@Body() users: Users) {
    return await this.mailService.sendUserConfirmation(users);
  }
}
