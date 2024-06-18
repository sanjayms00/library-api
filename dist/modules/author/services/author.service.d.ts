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
import { Model } from 'mongoose';
import { Author, Authorlist, allAuthorResponse } from '../interfaces/author.interface';
import { CreateAuthorDto } from '../dtos/create-author-request.dto';
import { UpdateAuthorDto } from '../dtos/update-author-request.dto';
import { Book } from 'src/modules/book/interfaces/book.interface';
export declare class AuthorService {
    private authorModel;
    private bookModel;
    constructor(authorModel: Model<Author>, bookModel: Model<Book>);
    createAuthor(createAuthor: CreateAuthorDto): Promise<Author>;
    updateAuthor(updateAuthor: UpdateAuthorDto): Promise<any>;
    deleteAuthor(id: string): Promise<import("mongodb").DeleteResult>;
    getAllAuthors(pgNo?: number): Promise<allAuthorResponse>;
    getAuthorById(id: string): Promise<Author[] | []>;
    getAllAuthorList(): Promise<Authorlist[]>;
}
