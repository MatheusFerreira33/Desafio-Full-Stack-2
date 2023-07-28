import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import {KnexModule} from 'nestjs-knex';
import  {join} from 'path';

@Module({
  imports: [KnexModule.forRoot({config:require('./database/knexfile')})
            ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
