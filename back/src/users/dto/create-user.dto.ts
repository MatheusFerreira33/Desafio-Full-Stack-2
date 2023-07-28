import { IsEmail, IsString, MaxLength } from 'class-validator';

export class CreateUserDto {

    @IsString()
    @MaxLength(45)
    name:string

    @IsEmail()
    @MaxLength(45)
    email:string

    @IsString()
    @MaxLength(15)
    cpf:string

    @IsString()
    @MaxLength(45)
    password:string

}
