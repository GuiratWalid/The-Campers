import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type UsersDocument = Users & Document;

@Schema({
    timestamps: true
  })
export class Users {
  @Prop({
    required:true,
    minlength:3
    })
  firstName: string;

  @Prop({
    required:true,
    minlength:3,
    })
  lastName: string;

  @Prop({
    required: true,
    unique: true,
    minlength:10
    })
  email: string;

  @Prop({
    minlength:8
    })
  password: string;

  @Prop()
  googleId: string;

  @Prop({
    required: true,
    unique: true,
    length: 8,
    index:{
      unique: true
    }
    })
  telephone: string;

  @Prop()
  gender: string;

  @Prop()
  birthDate: Date;

  @Prop({
    default: ''
  })
  image: string;

  @Prop({
    default:false
  })
  verified: boolean;
}

export const UsersSchema = SchemaFactory.createForClass(Users);