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
exports.AuthorService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("mongoose");
let AuthorService = class AuthorService {
    constructor(authorModel, bookModel) {
        this.authorModel = authorModel;
        this.bookModel = bookModel;
    }
    async createAuthor(createAuthor) {
        const createdAuthor = await new this.authorModel(createAuthor);
        return createdAuthor.save();
    }
    async updateAuthor(updateAuthor) {
        const { _id, name, biography, birthdate } = updateAuthor;
        const findAuthorExist = await this.getAuthorById(_id);
        if (!findAuthorExist || findAuthorExist.length <= 0) {
            return new common_1.NotFoundException('Author not found');
        }
        const updatedAuthor = await this.authorModel.updateOne({
            _id: _id,
        }, {
            $set: {
                name: name,
                biography: biography,
                birthdate: birthdate,
            },
        });
        return updatedAuthor;
    }
    async deleteAuthor(id) {
        const findAuthorExist = await this.getAuthorById(id);
        if (!findAuthorExist || findAuthorExist.length <= 0) {
            throw new common_1.NotFoundException('Author not found');
        }
        const findAuthorBookExist = await this.bookModel.find({
            authorId: id,
        });
        if (findAuthorBookExist || findAuthorBookExist.length > 0) {
            throw new common_1.ForbiddenException('The author contains books, this action is forbidden');
        }
        const authorDeleted = await this.authorModel
            .deleteOne({
            _id: id,
        })
            .exec();
        return authorDeleted;
    }
    async getAllAuthors(pgNo = 0) {
        const limit = 12;
        const pages = limit * pgNo;
        const total = await this.authorModel.countDocuments();
        const allAuhtors = await this.authorModel
            .find()
            .skip(pages)
            .limit(limit)
            .exec();
        return { author: allAuhtors, total };
    }
    async getAuthorById(id) {
        const authorDetails = await this.authorModel
            .find({
            _id: id,
        })
            .exec();
        if (authorDetails.length <= 0) {
            throw new common_1.NotFoundException('Author not found');
        }
        return authorDetails;
    }
    getAllAuthorList() {
        return this.authorModel.find({}, { _id: 1, name: 1 });
    }
};
exports.AuthorService = AuthorService;
exports.AuthorService = AuthorService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, common_1.Inject)('AUTHOR_MODEL')),
    __param(1, (0, common_1.Inject)('BOOK_MODEL')),
    __metadata("design:paramtypes", [mongoose_1.Model,
        mongoose_1.Model])
], AuthorService);
//# sourceMappingURL=author.service.js.map