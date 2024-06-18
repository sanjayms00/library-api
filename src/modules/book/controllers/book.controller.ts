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
import { Book } from '../interfaces/book.interface';
import { CreateBookDto } from '../dtos/create-book-request.dto';
import { BookDetailsDto } from '../dtos/book-details-request.dto';
import { DeleteBookDto } from '../dtos/delete-book-request.dto';
import { UpdateBookDto } from '../dtos/update-book-request.dto';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { BookService } from '../services/book.service';
import { paginatorDto } from 'src/common/dtos/pagination.dto';
import {
  ApiBody,
  ApiOperation,
  ApiParam,
  ApiQuery,
  ApiResponse,
  ApiTags,
} from '@nestjs/swagger';

@ApiTags('Book')
@Controller('book')
export class BookController {
  constructor(private readonly BookService: BookService) {}

  //create Book
  @Post('create')
  @ApiOperation({ summary: 'Create a book' })
  @ApiResponse({
    status: 200,
    description: 'Created book data',
  })
  @ApiResponse({
    status: 400,
    description: 'Bad request, and error response message',
  })
  @ApiBody({
    schema: {
      type: 'object',
      properties: {
        title: {
          type: 'string',
          example: 'book2',
          description: 'Title of the book',
        },
        description: {
          type: 'string',
          example: 'book description',
          description: 'Description of the book',
        },
        authorId: {
          type: 'string',
          example: '666df0683c01f0320798e64b',
          description: 'ID of the author',
        },
        publishedDate: {
          type: 'string',
          format: 'date-time',
          example: '2024-02-05T00:00:00.000Z',
          description: 'Published date of the book',
        },
      },
    },
  })
  createBook(@Body() createBook: CreateBookDto): Promise<Book> {
    return this.BookService.createBook(createBook);
  }

  //update Book
  @Put('update')
  @ApiOperation({ summary: 'Update a book' })
  @ApiResponse({
    status: 200,
    description: 'Updateed book data',
  })
  @ApiResponse({
    status: 400,
    description: 'Bad request, and error response message',
  })
  @ApiResponse({
    status: 404,
    description: 'Book not found',
  })
  @ApiBody({
    schema: {
      type: 'object',
      properties: {
        _id: {
          type: 'string',
          example: '666df0683c01f0320798e64b',
          description: 'ID of the book',
        },
        title: {
          type: 'string',
          example: 'book2',
          description: 'Title of the book',
        },
        description: {
          type: 'string',
          example: 'book description',
          description: 'Description of the book',
        },
        authorId: {
          type: 'string',
          example: '666df0683c01f0320798e64b',
          description: 'ID of the author',
        },
        publishedDate: {
          type: 'string',
          format: 'date-time',
          example: '2024-02-05T00:00:00.000Z',
          description: 'Published date of the book',
        },
      },
    },
  })
  async updateBook(@Body() updateBook: UpdateBookDto): Promise<any> {
    return await this.BookService.updateBook(updateBook);
  }

  //delete Book
  @Delete('delete/:id')
  @ApiOperation({ summary: 'Delete the book' })
  @ApiParam({
    name: 'id',
    description: 'The ID of the book to delete',
    type: String,
    example: '6670249449ae6bf59309b6d4',
  })
  @ApiResponse({
    status: 200,
    description: 'The book has been successfully deleted',
  })
  @ApiResponse({
    status: 404,
    description: 'Book not found',
  })
  @ApiResponse({
    status: 403,
    description: 'Forbidden response, unable to delete if book exist',
  })
  async deleteBook(@Param() params: DeleteBookDto) {
    const { id } = params;
    return await this.BookService.deleteBook(id);
  }

  //all Books
  @Get()
  @ApiOperation({ summary: 'Get all Book list' })
  @ApiQuery({
    name: 'pgNo',
    required: false,
    description: 'Page number',
    type: Number,
  })
  @ApiResponse({
    status: 200,
    description: 'List of book with pagination',
  })
  async getAllBooks(
    @Query() query: paginatorDto,
  ): Promise<{ allBooks: Book[]; total: number }> {
    const pgNo = Object.keys(query).length <= 0 ? 0 : Number(query.pgNo);

    return await this.BookService.getAllBooks(pgNo);
  }

  //get Book by id
  @Get('detail/:id')
  @ApiOperation({ summary: 'Get book details by ID' })
  @ApiParam({ name: 'id', type: 'string', description: 'ID of the book' })
  @ApiResponse({
    status: 200,
    description: 'Book data found',
  })
  @ApiResponse({
    status: 404,
    description: 'Book not found',
  })
  async getBookById(@Param() params: BookDetailsDto) {
    const { id } = params;

    const [bookData] = await this.BookService.getBookDetails(id);

    return bookData ? bookData : {};
  }
}
