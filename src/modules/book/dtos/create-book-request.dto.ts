import { Type } from 'class-transformer';
import { IsDate, IsNotEmpty, IsString, Length } from 'class-validator';

export class CreateBookDto {
  @IsString()
  @IsNotEmpty()
  title: string;

  @IsString()
  description: string;

  @IsString()
  @Length(24, 24, { message: 'Id must be exactly 24 characters long' })
  authorId: string;

  @IsNotEmpty()
  @IsDate()
  @Type(() => Date)
  publishedDate: Date;
}
