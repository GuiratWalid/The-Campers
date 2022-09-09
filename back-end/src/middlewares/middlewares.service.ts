import { Injectable, NestMiddleware } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { NextFunction, Request, Response } from 'express';
import { Model } from 'mongoose';
import { Users, UsersDocument } from 'src/schema/users.schema';
import jwt from 'jsonwebtoken';


@Injectable()
export class MiddlewaresService implements NestMiddleware {
    constructor(@InjectModel(Users.name) private readonly usersModel: Model<UsersDocument>) {}

    secret = 'test';

    async use(req: Request, res: Response, next: NextFunction) {
        try {
            const token = req.headers.authorization.split(" ")[1];
            const isCustomAuth = token.length < 500;
            let decodeData;
            if (token && isCustomAuth) {
                decodeData = jwt.verify(token, this.secret);
                // req.userId = decodeData?.id;
            }
            else {
                decodeData = jwt.decode(token);
                const googleId = decodeData?.sub.toString();
                const user = await this.usersModel.findOne({ googleId });
                // req.userId = user?._id;
            }
            next();
        }
        catch (err) {
            console.log(err);
            return res.status(400).json({ message: "You don't have permission" });
        }
    };
    
}
