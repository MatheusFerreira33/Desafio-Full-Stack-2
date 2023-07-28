import {MiddlewareConsumer, Module,NestModule,RequestMethod} from '@nestjs/common';
import {JwtModule} from '@nestjs/jwt';
import {AuthController} from './auth.controllers';
import {AuthService} from './auth.service';
import {CheckTypeUser} from '../middlewares/checkTypeUser.middlewares';

@Module({
    imports:[JwtModule.register({secret:'esn3E3bJCtx88gFj9XrGJvd9YuXKkJVQ'})],
    controllers:[AuthController],
    providers:[AuthService]
})
export class AuthModule implements NestModule{
    configure(consumer:MiddlewareConsumer){
        consumer
        .apply(CheckTypeUser)
        .forRoutes({path:'auth/transaction', method:RequestMethod.POST})
    }
}
