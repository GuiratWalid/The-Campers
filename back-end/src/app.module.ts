import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { MongooseModule } from '@nestjs/mongoose';
import { MailModule } from './mail/mail.module';
import { MiddlewaresModule } from './middlewares/middlewares.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb+srv://walid:KUvgX7dT7pGJubPG@cluster0.gm8gg4f.mongodb.net/?retryWrites=true&w=majority'),
    UsersModule,
    MailModule,
    MiddlewaresModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
