import { NestMiddleware, ConflictException } from "@nestjs/common";
import {Request, Response, NextFunction} from 'express';
import {CreateUserDto} from '../users/dto/create-user.dto';
import { Knex, InjectKnex} from 'nestjs-knex';

export class CheckCpfExist implements NestMiddleware{

    constructor(@InjectKnex() private readonly knexservice:Knex){}

    async use(req: Request, res: Response, next:NextFunction) {
        const {cpf}:CreateUserDto = req.body;

        const findCpf = await this.knexservice('users').where('cpf', cpf).first();

        if(findCpf){
            throw new ConflictException('CPF already in use.');
        }

        next();

    }
}