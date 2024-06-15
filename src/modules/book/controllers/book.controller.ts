import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { Book } from '../interfaces/book.interface';
import { CreateBookDto } from '../dtos/create-book-request.dto';
import { BookDetailsDto } from '../dtos/book-details-request.dto';
import { DeleteBookDto } from '../dtos/delete-book-request.dto';
import { UpdateBookDto } from '../dtos/update-book-request.dto';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { BookService } from '../services/book.service';

@Controller('book')
export class BookController {
  constructor(private readonly BookService: BookService) {}

  //create Book
  @Post('create')
  createBook(@Body() createBook: CreateBookDto): Promise<Book> {
    return this.BookService.createBook(createBook);
  }

  //update Book
  @Put('update')
  async updateBook(@Body() updateBook: UpdateBookDto): Promise<any> {
    return await this.BookService.updateBook(updateBook);
  }

  //delete Book
  @Delete('delete/:id')
  async deleteBook(@Param() params: DeleteBookDto) {
    const { id } = params;
    return await this.BookService.deleteBook(id);
  }

  //all Books
  @Get()
  async getAllBooks(): Promise<Book[]> {
    return await this.BookService.getAllBooks();
  }

  //get Book by id
  @Get('detail/:id')
  async getBookById(@Param() params: BookDetailsDto) {
    const { id } = params;
    return await this.BookService.getBookById(id);
  }
}
