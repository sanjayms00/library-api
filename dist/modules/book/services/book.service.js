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
exports.BookService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("mongoose");
let BookService = class BookService {
    constructor(bookModel) {
        this.bookModel = bookModel;
    }
    async createBook(createBook) {
        const createdBook = await new this.bookModel(createBook);
        return createdBook.save();
    }
    async updateBook(updateBook) {
        const { _id, authorId, description, title } = updateBook;
        const findBookExist = await this.getBookById(_id);
        if (!findBookExist || findBookExist.length <= 0) {
            return new common_1.NotFoundException('Book not found');
        }
        const updatedBook = await this.bookModel.updateOne({
            _id: _id,
        }, {
            $set: {
                title,
                description,
                authorId,
            },
        });
        return updatedBook;
    }
    async deleteBook(id) {
        const findBookExist = await this.getBookById(id);
        if (!findBookExist || findBookExist.length <= 0) {
            return new common_1.NotFoundException('Book not found');
        }
        const BookDeleted = await this.bookModel
            .deleteOne({
            _id: id,
        })
            .exec();
        return BookDeleted;
    }
    async getAllBooks(pgNo = 0) {
        const limit = 12;
        const pages = limit * pgNo;
        const total = await this.bookModel.countDocuments().exec();
        const allBooks = await this.bookModel.aggregate([
            {
                $match: {},
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
                $skip: pages,
            },
            {
                $limit: limit,
            },
        ]);
        return { allBooks, total };
    }
    async getBookById(id) {
        const bookDetails = await this.bookModel
            .find({
            _id: id,
        })
            .exec();
        return bookDetails ? bookDetails : [];
    }
    async getBookDetails(id) {
        let bookData = await this.getBookById(id);
        if (!bookData || bookData.length <= 0) {
            throw new common_1.NotFoundException('Book not found');
        }
        bookData = await this.bookModel.aggregate([
            {
                $match: { _id: new mongoose_1.Types.ObjectId(id) },
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
        ]);
        return bookData;
    }
};
exports.BookService = BookService;
exports.BookService = BookService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, common_1.Inject)('BOOK_MODEL')),
    __metadata("design:paramtypes", [mongoose_1.Model])
], BookService);
//# sourceMappingURL=book.service.js.map