import { IsEmail, IsNotEmpty, IsString } from 'class-validator';
import { PartialType } from '@nestjs/mapped-types';

export class LoginUserDto {
  @IsNotEmpty()
  @IsEmail()
  email: string;

  @IsNotEmpty()
  @IsString()
  password: string;
}

export class RegisterUserDto {
  @IsEmail({}, { message: 'Email is invalid!' })
  @IsNotEmpty({ message: 'Email is not empty!' })
  email: string;

  @IsNotEmpty({ message: 'Password is required!' })
  password: string;

  @IsNotEmpty({ message: 'Phone is required!' })
  phone: string;

  @IsNotEmpty({ message: 'Name is required!' })
  name: string;
  @IsNotEmpty({ message: 'Age is required!' })
  age: number;

  @IsNotEmpty({ message: 'Gender is required!' })
  gender: string;

  @IsNotEmpty({ message: 'Address is required!' })
  address: string;
}

export class CreateUserDto extends PartialType(RegisterUserDto) {
  @IsNotEmpty({ message: 'Role is required!' })
  @IsString()
  role: string;
}
