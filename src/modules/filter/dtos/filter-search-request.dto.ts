import { IsOptional, IsString, Length } from 'class-validator';

export class FilerSearchDto {
  @IsString()
  @IsOptional()
  word?: string;

  @IsString()
  @IsOptional()
  pgNo?: string;

  @IsString()
  @IsOptional()
  @Length(24, 24, { message: 'authorId must be exactly 24 characters long' })
  authorId?: string;

  @IsString()
  @IsOptional()
  startDate?: string;

  @IsString()
  @IsOptional()
  endDate?: string;
}
