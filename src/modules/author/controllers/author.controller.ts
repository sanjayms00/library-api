import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  Query,
} from '@nestjs/common';
import { CreateAuthorDto } from '../dtos/create-author-request.dto';
import { AuthorService } from '../services/author.service';
import { Author } from '../interfaces/author.interface';
import { UpdateAuthorDto } from '../dtos/update-author-request.dto';
import { DeleteAuthorDto } from '../dtos/delete-author-request.dto';
import { authorDetailsDto } from '../dtos/author-details-request.dto';
import { paginatorDto } from 'src/common/dtos/pagination.dto';

@Controller('author')
export class AuthorController {
  constructor(private readonly authorService: AuthorService) {}

  //create author
  @Post('create')
  createAuthor(@Body() createAuthor: CreateAuthorDto): Promise<Author> {
    return this.authorService.createAuthor(createAuthor);
  }

  //update author
  @Put('update')
  async updateAuthor(@Body() updateAuthor: UpdateAuthorDto): Promise<any> {
    return await this.authorService.updateAuthor(updateAuthor);
  }

  //delete author
  @Delete('delete/:id')
  async deleteAuthor(@Param() params: DeleteAuthorDto) {
    const { id } = params;
    return await this.authorService.deleteAuthor(id);
  }

  //all authors
  @Get()
  async getAllAuthors(@Query() query: paginatorDto): Promise<Author[]> {
    const pgNo = Object.keys(query).length <= 0 ? 0 : Number(query.pgNo);

    return await this.authorService.getAllAuthors(pgNo);
  }

  //get author by id
  @Get('detail/:id')
  async getAuthorById(@Param() params: authorDetailsDto) {
    const { id } = params;
    return await this.authorService.getAuthorById(id);
  }
}
