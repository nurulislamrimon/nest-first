import { IsInt, IsPositive } from 'class-validator';

export class ParamDto {
  @IsInt()
  @IsPositive()
  id: number;
}
