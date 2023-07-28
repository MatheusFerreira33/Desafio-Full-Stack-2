import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import {Knex, InjectKnex} from 'nestjs-knex';

@Injectable()
export class UsersService {

  constructor(@InjectKnex() private readonly knexservice:Knex){}

  async create({cpf,email,name,password}: CreateUserDto) {
    await this.knexservice('users').insert({
      name,
      email,
      cpf,
      password
    });

    const result = await this.knexservice('users').where('email', email).select('*');
    return result[0];
  }

  findAll() {
    return `This action returns all users`;
  }

  findOne(id: number) {
    return `This action returns a #${id} user`;
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
