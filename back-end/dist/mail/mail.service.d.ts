import { MailerService } from '@nestjs-modules/mailer';
import { Users } from './../schema/users.schema';
export declare class MailService {
    private mailerService;
    constructor(mailerService: MailerService);
    sendUserConfirmation(users: Users): Promise<void>;
}
