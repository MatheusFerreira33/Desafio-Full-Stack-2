import { Body, Controller, Post, NotFoundException} from "@nestjs/common";
import { Knex, InjectKnex} from 'nestjs-knex';
import {LoginDto} from './dto/login.dto';
import {AuthService} from './auth.service';

@Controller('auth')
export class AuthController{
    constructor(@InjectKnex() private readonly knexservice:Knex, private readonly authservice:AuthService){}

    @Post('login')
    async login(@Body() {email,password}:LoginDto){
        const user = await this.knexservice('users').where({email,password}).first();

        if(!user){
            throw new NotFoundException('Incorrect email or password');
        }

        return this.authservice.createToken(user);
    }

    @Post('transaction')
    async createTransaction(){
        return 'ok'
    }

}