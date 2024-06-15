import { Type } from 'class-transformer';
import { IsDate, IsNotEmpty, IsString } from 'class-validator';

export class CreateAuthorDto {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsString()
  biography: string;

  @IsNotEmpty()
  @IsDate()
  @Type(() => Date)
  birthdate: Date;
}
