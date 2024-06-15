import { Type } from 'class-transformer';
import { IsDate, IsNotEmpty, IsString, Length } from 'class-validator';

export class UpdateBookDto {
  @IsString()
  @Length(24, 24, { message: 'Id must be exactly 24 characters long' })
  @IsNotEmpty()
  _id: string;

  @IsNotEmpty()
  @IsString()
  title: string;

  @IsNotEmpty()
  @IsString()
  description: string;

  @IsString()
  @Length(24, 24, { message: 'Id must be exactly 24 characters long' })
  authorId: string;

  @IsDate()
  @Type(() => Date)
  publishedDate: Date;
}
