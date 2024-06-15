import { Type } from 'class-transformer';
import { IsDate, IsNotEmpty, IsString, Length } from 'class-validator';
import { Schema } from 'mongoose';

export class CreateBookDto {
  @IsString()
  @IsNotEmpty()
  title: string;

  @IsString()
  description: string;

  @IsString()
  @Length(24, 24, { message: 'Id must be exactly 24 characters long' })
  authorId: Schema.Types.ObjectId;

  @IsNotEmpty()
  @IsDate()
  @Type(() => Date)
  publishedDate: Date;
}
