import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';
import { Users, UsersSchema } from '../schema/users.schema';
import { MailModule } from 'src/mail/mail.module';

@Module({ 
  imports: [
    MongooseModule.forFeature([{ name: Users.name, schema: UsersSchema }]),
    MailModule
  ],
  providers: [UsersService],
  controllers: [UsersController]
})
export class UsersModule {}
