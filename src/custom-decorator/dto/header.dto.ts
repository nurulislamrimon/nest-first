import { IsNotEmpty, IsString } from 'class-validator';

export class HeaderDto {
  @IsString()
  @IsNotEmpty()
  'access-token': string;
}
