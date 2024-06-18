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
exports.FilterController = void 0;
const common_1 = require("@nestjs/common");
const filter_service_1 = require("../services/filter.service");
const filter_search_request_dto_1 = require("../dtos/filter-search-request.dto");
const swagger_1 = require("@nestjs/swagger");
let FilterController = class FilterController {
    constructor(filterService) {
        this.filterService = filterService;
    }
    async searchBook(filterSearchDto) {
        const { word, authorId, startDate, endDate, pgNo } = filterSearchDto;
        let pageNo = 0;
        if (pgNo) {
            pageNo = Number(pgNo);
        }
        const publishedDate = {};
        if (startDate && endDate) {
            publishedDate.start = startDate;
            publishedDate.end = endDate;
        }
        return await this.filterService.searchBook(word, authorId, publishedDate, pageNo);
    }
};
exports.FilterController = FilterController;
__decorate([
    (0, common_1.Get)(),
    (0, swagger_1.ApiOperation)({ summary: 'Get all Book list with filtering and pagination' }),
    (0, swagger_1.ApiQuery)({
        name: 'authorId',
        required: false,
        description: 'Filter by author ID',
    }),
    (0, swagger_1.ApiQuery)({
        name: 'startDate',
        required: false,
        description: 'Filter by start date',
        type: 'string',
        example: '2024-02-02T00:00:00.000Z',
    }),
    (0, swagger_1.ApiQuery)({
        name: 'endDate',
        required: false,
        description: 'Filter by end date',
        type: 'string',
        example: '2024-02-05T00:00:00.000Z',
    }),
    (0, swagger_1.ApiQuery)({
        name: 'pgNo',
        required: false,
        description: 'Page number',
        type: 'string',
    }),
    (0, swagger_1.ApiQuery)({
        name: 'word',
        required: false,
        description: 'Search with word',
        type: 'string',
    }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: 'List of book with pagination',
    }),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [filter_search_request_dto_1.FilerSearchDto]),
    __metadata("design:returntype", Promise)
], FilterController.prototype, "searchBook", null);
exports.FilterController = FilterController = __decorate([
    (0, common_1.Controller)('filter'),
    __metadata("design:paramtypes", [filter_service_1.FilterService])
], FilterController);
//# sourceMappingURL=filter.controller.js.map