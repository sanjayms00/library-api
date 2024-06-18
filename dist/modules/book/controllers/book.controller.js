"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BookController = void 0;
const common_1 = require("@nestjs/common");
const create_book_request_dto_1 = require("../dtos/create-book-request.dto");
const book_details_request_dto_1 = require("../dtos/book-details-request.dto");
const delete_book_request_dto_1 = require("../dtos/delete-book-request.dto");
const update_book_request_dto_1 = require("../dtos/update-book-request.dto");
const book_service_1 = require("../services/book.service");
const pagination_dto_1 = require("../../../common/dtos/pagination.dto");
const swagger_1 = require("@nestjs/swagger");
let BookController = class BookController {
    constructor(BookService) {
        this.BookService = BookService;
    }
    createBook(createBook) {
        return this.BookService.createBook(createBook);
    }
    async updateBook(updateBook) {
        return await this.BookService.updateBook(updateBook);
    }
    async deleteBook(params) {
        const { id } = params;
        return await this.BookService.deleteBook(id);
    }
    async getAllBooks(query) {
        const pgNo = Object.keys(query).length <= 0 ? 0 : Number(query.pgNo);
        return await this.BookService.getAllBooks(pgNo);
    }
    async getBookById(params) {
        const { id } = params;
        const [bookData] = await this.BookService.getBookDetails(id);
        return bookData ? bookData : {};
    }
};
exports.BookController = BookController;
__decorate([
    (0, common_1.Post)('create'),
    (0, swagger_1.ApiOperation)({ summary: 'Create a book' }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: 'Created book data',
    }),
    (0, swagger_1.ApiResponse)({
        status: 400,
        description: 'Bad request, and error response message',
    }),
    (0, swagger_1.ApiBody)({
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
    }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_book_request_dto_1.CreateBookDto]),
    __metadata("design:returntype", Promise)
], BookController.prototype, "createBook", null);
__decorate([
    (0, common_1.Put)('update'),
    (0, swagger_1.ApiOperation)({ summary: 'Update a book' }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: 'Updateed book data',
    }),
    (0, swagger_1.ApiResponse)({
        status: 400,
        description: 'Bad request, and error response message',
    }),
    (0, swagger_1.ApiResponse)({
        status: 404,
        description: 'Book not found',
    }),
    (0, swagger_1.ApiBody)({
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
    }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [update_book_request_dto_1.UpdateBookDto]),
    __metadata("design:returntype", Promise)
], BookController.prototype, "updateBook", null);
__decorate([
    (0, common_1.Delete)('delete/:id'),
    (0, swagger_1.ApiOperation)({ summary: 'Delete the book' }),
    (0, swagger_1.ApiParam)({
        name: 'id',
        description: 'The ID of the book to delete',
        type: String,
        example: '6670249449ae6bf59309b6d4',
    }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: 'The book has been successfully deleted',
    }),
    (0, swagger_1.ApiResponse)({
        status: 404,
        description: 'Book not found',
    }),
    (0, swagger_1.ApiResponse)({
        status: 403,
        description: 'Forbidden response, unable to delete if book exist',
    }),
    __param(0, (0, common_1.Param)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [delete_book_request_dto_1.DeleteBookDto]),
    __metadata("design:returntype", Promise)
], BookController.prototype, "deleteBook", null);
__decorate([
    (0, common_1.Get)(),
    (0, swagger_1.ApiOperation)({ summary: 'Get all Book list' }),
    (0, swagger_1.ApiQuery)({
        name: 'pgNo',
        required: false,
        description: 'Page number',
        type: Number,
    }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: 'List of book with pagination',
    }),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [pagination_dto_1.paginatorDto]),
    __metadata("design:returntype", Promise)
], BookController.prototype, "getAllBooks", null);
__decorate([
    (0, common_1.Get)('detail/:id'),
    (0, swagger_1.ApiOperation)({ summary: 'Get book details by ID' }),
    (0, swagger_1.ApiParam)({ name: 'id', type: 'string', description: 'ID of the book' }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: 'Book data found',
    }),
    (0, swagger_1.ApiResponse)({
        status: 404,
        description: 'Book not found',
    }),
    __param(0, (0, common_1.Param)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [book_details_request_dto_1.BookDetailsDto]),
    __metadata("design:returntype", Promise)
], BookController.prototype, "getBookById", null);
exports.BookController = BookController = __decorate([
    (0, swagger_1.ApiTags)('Book'),
    (0, common_1.Controller)('book'),
    __metadata("design:paramtypes", [book_service_1.BookService])
], BookController);
//# sourceMappingURL=book.controller.js.map