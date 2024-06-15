import { IsNotEmpty, IsString, Length } from 'class-validator';

export class DeleteBookDto {
  @IsString()
  @IsNotEmpty()
  @Length(24, 24, { message: 'Id must be exactly 24 characters long' })
  id: string;
}
