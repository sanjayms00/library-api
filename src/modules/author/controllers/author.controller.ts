import { Controller, Delete, Get, Post, Put, Req } from '@nestjs/common';

@Controller('author')
export class AuthorController {
  //create author
  @Post('create')
  createAuthor() {}

  //update author
  @Put('update')
  updateAuthor() {}

  //delete author
  @Delete('delete')
  deleteAuthor() {}

  //all authors
  @Get()
  getAllAuthors(@Req() request: Request): string {
    console.log(request);
    return 'This action returns all cats';
  }

  //get author by id
  @Get('detail')
  getAuthorById() {}
}
