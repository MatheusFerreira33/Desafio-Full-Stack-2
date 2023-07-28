import { Injectable } from "@nestjs/common";
import { InjectKnex, Knex } from "nestjs-knex";
import {JwtService}  from '@nestjs/jwt';

interface IResponseUser{
    id:number,
    name:string,
    email:string,
    cpf:string,
    password:string,
    type:boolean
}

@Injectable()
export class AuthService{
    constructor(@InjectKnex() private readonly knexservice:Knex, private readonly jwtservice:JwtService){}

    async createToken(user:IResponseUser){
        return{
            token:this.jwtservice.sign({
                admin:user.type,
            },{
                expiresIn:'1 days',
                subject:String(user.id)
            })
        }
    }
}