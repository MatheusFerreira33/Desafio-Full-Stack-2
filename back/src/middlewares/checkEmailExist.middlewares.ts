import { NestMiddleware, ConflictException } from "@nestjs/common";
import {Request, Response, NextFunction} from 'express';
import {CreateUserDto} from '../users/dto/create-user.dto';
import { Knex, InjectKnex} from 'nestjs-knex';

export class CheckEmailExist implements NestMiddleware{

    constructor(@InjectKnex() private readonly knexservice:Knex){}

    async use(req: Request, res: Response, next:NextFunction) {
        const {email}:CreateUserDto = req.body;

        const findEmail = await this.knexservice('users').where('email', email).first();

        if(findEmail){
            throw new ConflictException('E-mail already in use.');
        }

        next();

    }
}