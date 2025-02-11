import { IsInt } from 'class-validator';

export class CreateHeaderDto {
  @IsInt()
  name: string;
}
