import { IsOptional, IsString } from 'class-validator';

export class paginatorDto {
  @IsString()
  @IsOptional()
  pgNo: string;
}
