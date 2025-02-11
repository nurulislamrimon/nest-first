import { IsString, IsEmail, MinLength, IsInt } from 'class-validator';

export class CreateUserDto {
  @IsString()
  username: string;

  @IsString()
  name: string;

  @IsEmail()
  email: string;

  @IsString()
  @MinLength(6)
  @MinLength(3)
  password: string;

  @IsInt()
  age: number;
}
