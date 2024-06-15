import { Type } from 'class-transformer';
import { IsDate, IsNotEmpty, IsString, Length } from 'class-validator';

export class UpdateAuthorDto {
  @IsString()
  @Length(24, 24, { message: 'Id must be exactly 24 characters long' })
  @IsNotEmpty()
  _id: string;

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
