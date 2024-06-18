import { CreateAuthorDto } from '../dtos/create-author-request.dto';
import { AuthorService } from '../services/author.service';
import { Author, Authorlist, allAuthorResponse } from '../interfaces/author.interface';
import { UpdateAuthorDto } from '../dtos/update-author-request.dto';
import { DeleteAuthorDto } from '../dtos/delete-author-request.dto';
import { authorDetailsDto } from '../dtos/author-details-request.dto';
import { paginatorDto } from 'src/common/dtos/pagination.dto';
export declare class AuthorController {
    private readonly authorService;
    constructor(authorService: AuthorService);
    createAuthor(createAuthor: CreateAuthorDto): Promise<Author>;
    updateAuthor(updateAuthor: UpdateAuthorDto): Promise<any>;
    deleteAuthor(params: DeleteAuthorDto): Promise<import("mongodb").DeleteResult>;
    getAllAuthors(query: paginatorDto): Promise<allAuthorResponse>;
    getAuthorById(params: authorDetailsDto): Promise<[] | Author[]>;
    getAllAuthorList(): Promise<Authorlist[]>;
}
