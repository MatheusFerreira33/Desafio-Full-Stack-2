import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import {KnexModule} from 'nestjs-knex';
import { UsersModule } from './users/users.module';
import {AuthModule} from './auth/auth.module';

@Module({
  imports: [KnexModule.forRoot({config:require('./database/knexfile')}), UsersModule,AuthModule
            ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
