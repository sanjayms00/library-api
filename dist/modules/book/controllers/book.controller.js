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
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_book_request_dto_1.CreateBookDto]),
    __metadata("design:returntype", Promise)
], BookController.prototype, "createBook", null);
__decorate([
    (0, common_1.Put)('update'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [update_book_request_dto_1.UpdateBookDto]),
    __metadata("design:returntype", Promise)
], BookController.prototype, "updateBook", null);
__decorate([
    (0, common_1.Delete)('delete/:id'),
    __param(0, (0, common_1.Param)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [delete_book_request_dto_1.DeleteBookDto]),
    __metadata("design:returntype", Promise)
], BookController.prototype, "deleteBook", null);
__decorate([
    (0, common_1.Get)(),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [pagination_dto_1.paginatorDto]),
    __metadata("design:returntype", Promise)
], BookController.prototype, "getAllBooks", null);
__decorate([
    (0, common_1.Get)('detail/:id'),
    __param(0, (0, common_1.Param)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [book_details_request_dto_1.BookDetailsDto]),
    __metadata("design:returntype", Promise)
], BookController.prototype, "getBookById", null);
exports.BookController = BookController = __decorate([
    (0, common_1.Controller)('book'),
    __metadata("design:paramtypes", [book_service_1.BookService])
], BookController);
//# sourceMappingURL=book.controller.js.map