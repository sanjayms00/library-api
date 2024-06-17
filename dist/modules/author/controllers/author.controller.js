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
exports.AuthorController = void 0;
const common_1 = require("@nestjs/common");
const create_author_request_dto_1 = require("../dtos/create-author-request.dto");
const author_service_1 = require("../services/author.service");
const update_author_request_dto_1 = require("../dtos/update-author-request.dto");
const delete_author_request_dto_1 = require("../dtos/delete-author-request.dto");
const author_details_request_dto_1 = require("../dtos/author-details-request.dto");
const pagination_dto_1 = require("../../../common/dtos/pagination.dto");
let AuthorController = class AuthorController {
    constructor(authorService) {
        this.authorService = authorService;
    }
    createAuthor(createAuthor) {
        return this.authorService.createAuthor(createAuthor);
    }
    async updateAuthor(updateAuthor) {
        return await this.authorService.updateAuthor(updateAuthor);
    }
    async deleteAuthor(params) {
        const { id } = params;
        return await this.authorService.deleteAuthor(id);
    }
    async getAllAuthors(query) {
        const pgNo = Object.keys(query).length <= 0 ? 0 : Number(query.pgNo);
        return await this.authorService.getAllAuthors(pgNo);
    }
    async getAuthorById(params) {
        const { id } = params;
        return await this.authorService.getAuthorById(id);
    }
    async getAllAuthorList() {
        return await this.authorService.getAllAuthorList();
    }
};
exports.AuthorController = AuthorController;
__decorate([
    (0, common_1.Post)('create'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_author_request_dto_1.CreateAuthorDto]),
    __metadata("design:returntype", Promise)
], AuthorController.prototype, "createAuthor", null);
__decorate([
    (0, common_1.Put)('update'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [update_author_request_dto_1.UpdateAuthorDto]),
    __metadata("design:returntype", Promise)
], AuthorController.prototype, "updateAuthor", null);
__decorate([
    (0, common_1.Delete)('delete/:id'),
    __param(0, (0, common_1.Param)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [delete_author_request_dto_1.DeleteAuthorDto]),
    __metadata("design:returntype", Promise)
], AuthorController.prototype, "deleteAuthor", null);
__decorate([
    (0, common_1.Get)(),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [pagination_dto_1.paginatorDto]),
    __metadata("design:returntype", Promise)
], AuthorController.prototype, "getAllAuthors", null);
__decorate([
    (0, common_1.Get)('detail/:id'),
    __param(0, (0, common_1.Param)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [author_details_request_dto_1.authorDetailsDto]),
    __metadata("design:returntype", Promise)
], AuthorController.prototype, "getAuthorById", null);
__decorate([
    (0, common_1.Get)('list'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], AuthorController.prototype, "getAllAuthorList", null);
exports.AuthorController = AuthorController = __decorate([
    (0, common_1.Controller)('author'),
    __metadata("design:paramtypes", [author_service_1.AuthorService])
], AuthorController);
//# sourceMappingURL=author.controller.js.map