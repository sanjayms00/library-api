import { Book } from '../interfaces/book.interface';
import { CreateBookDto } from '../dtos/create-book-request.dto';
import { BookDetailsDto } from '../dtos/book-details-request.dto';
import { DeleteBookDto } from '../dtos/delete-book-request.dto';
import { UpdateBookDto } from '../dtos/update-book-request.dto';
import { BookService } from '../services/book.service';
import { paginatorDto } from 'src/common/dtos/pagination.dto';
export declare class BookController {
    private readonly BookService;
    constructor(BookService: BookService);
    createBook(createBook: CreateBookDto): Promise<Book>;
    updateBook(updateBook: UpdateBookDto): Promise<any>;
    deleteBook(params: DeleteBookDto): Promise<import("@nestjs/common").NotFoundException | import("mongodb").DeleteResult>;
    getAllBooks(query: paginatorDto): Promise<{
        allBooks: Book[];
        total: number;
    }>;
    getBookById(params: BookDetailsDto): Promise<{}>;
}
