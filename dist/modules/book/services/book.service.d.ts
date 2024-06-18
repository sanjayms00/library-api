/// <reference types="mongoose/types/aggregate" />
/// <reference types="mongoose/types/callback" />
/// <reference types="mongoose/types/collection" />
/// <reference types="mongoose/types/connection" />
/// <reference types="mongoose/types/cursor" />
/// <reference types="mongoose/types/document" />
/// <reference types="mongoose/types/error" />
/// <reference types="mongoose/types/expressions" />
/// <reference types="mongoose/types/helpers" />
/// <reference types="mongoose/types/middlewares" />
/// <reference types="mongoose/types/indexes" />
/// <reference types="mongoose/types/models" />
/// <reference types="mongoose/types/mongooseoptions" />
/// <reference types="mongoose/types/pipelinestage" />
/// <reference types="mongoose/types/populate" />
/// <reference types="mongoose/types/query" />
/// <reference types="mongoose/types/schemaoptions" />
/// <reference types="mongoose/types/schematypes" />
/// <reference types="mongoose/types/session" />
/// <reference types="mongoose/types/types" />
/// <reference types="mongoose/types/utility" />
/// <reference types="mongoose/types/validation" />
/// <reference types="mongoose/types/virtuals" />
/// <reference types="mongoose/types/inferschematype" />
/// <reference types="mongoose/types/inferrawdoctype" />
import { NotFoundException } from '@nestjs/common';
import { Book } from '../interfaces/book.interface';
import { UpdateBookDto } from '../dtos/update-book-request.dto';
import { CreateBookDto } from '../dtos/create-book-request.dto';
import { Model } from 'mongoose';
export declare class BookService {
    private bookModel;
    constructor(bookModel: Model<Book>);
    createBook(createBook: CreateBookDto): Promise<Book>;
    updateBook(updateBook: UpdateBookDto): Promise<any>;
    deleteBook(id: string): Promise<import("mongodb").DeleteResult | NotFoundException>;
    getAllBooks(pgNo?: number): Promise<{
        allBooks: Book[];
        total: number;
    }>;
    getBookById(id: string): Promise<Book[] | []>;
    getBookDetails(id: string): Promise<Book[]>;
}
