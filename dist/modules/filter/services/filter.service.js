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
exports.FilterService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("mongoose");
let FilterService = class FilterService {
    constructor(bookModel) {
        this.bookModel = bookModel;
    }
    async searchBook(word, authorId, publishedDate, pgNo = 0) {
        const count = 12;
        const searchCriteria = {};
        if (word) {
            searchCriteria.title = {
                $regex: word,
                $options: 'i',
            };
        }
        if (authorId) {
            searchCriteria.authorId = new mongoose_1.Types.ObjectId(authorId);
        }
        if (publishedDate && publishedDate.start && publishedDate.end) {
            searchCriteria.publishedDate = {
                $gte: new Date(publishedDate.start),
                $lte: new Date(publishedDate.end),
            };
        }
        const total = await this.bookModel
            .find(searchCriteria)
            .countDocuments()
            .exec();
        const allBooks = await this.bookModel.aggregate([
            {
                $match: searchCriteria,
            },
            {
                $lookup: {
                    from: 'authors',
                    localField: 'authorId',
                    foreignField: '_id',
                    as: 'authorData',
                },
            },
            {
                $unwind: '$authorData',
            },
            {
                $project: {
                    __v: 0,
                    'authorData.__v': 0,
                },
            },
            {
                $skip: pgNo * count,
            },
            {
                $limit: count,
            },
        ]);
        return { allBooks, total };
    }
};
exports.FilterService = FilterService;
exports.FilterService = FilterService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, common_1.Inject)('BOOK_MODEL')),
    __metadata("design:paramtypes", [mongoose_1.Model])
], FilterService);
//# sourceMappingURL=filter.service.js.map