import { MiddlewareConsumer, Module, NestModule, RequestMethod } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import {CheckEmailExist} from '../middlewares/checkEmailExist.middlewares';
import {CheckCpfExist} from '../middlewares/checkCpfExists.middlewares';

@Module({
  imports:[],
  controllers: [UsersController],
  providers: [UsersService]
})
export class UsersModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
    .apply(CheckEmailExist, CheckCpfExist)
    .forRoutes({path:'users', method:RequestMethod.POST})
  }
}
