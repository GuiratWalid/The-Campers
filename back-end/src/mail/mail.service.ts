import { MailerService } from '@nestjs-modules/mailer';
import { Injectable } from '@nestjs/common';
import { Users } from './../schema/users.schema';

@Injectable()
export class MailService {
  constructor(private mailerService: MailerService) {}

  async sendUserConfirmation(users: Users) {
    const url = `www.facebook.com`;

    await this.mailerService.sendMail({
      to: users.email,
      // from: '"Support Team" <support@example.com>', 
      subject: 'Welcome to The Campers website! Confirm your account',
      template: './confirmation',
      context: { // ✏️ filling curly brackets with content
        name: users.firstName+' '+users.lastName,
        url,
      },
    });
  }
}