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
exports.LibraryApiController = void 0;
const common_1 = require("@nestjs/common");
const library_api_service_1 = require("./library-api.service");
const create_library_api_dto_1 = require("./dto/create-library-api.dto");
const update_library_api_dto_1 = require("./dto/update-library-api.dto");
let LibraryApiController = class LibraryApiController {
    constructor(libraryApiService) {
        this.libraryApiService = libraryApiService;
    }
    create(createLibraryApiDto) {
        return this.libraryApiService.create(createLibraryApiDto);
    }
    findAll() {
        return this.libraryApiService.findAll();
    }
    findOne(id) {
        return this.libraryApiService.findOne(+id);
    }
    update(id, updateLibraryApiDto) {
        return this.libraryApiService.update(+id, updateLibraryApiDto);
    }
    remove(id) {
        return this.libraryApiService.remove(+id);
    }
};
exports.LibraryApiController = LibraryApiController;
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_library_api_dto_1.CreateLibraryApiDto]),
    __metadata("design:returntype", void 0)
], LibraryApiController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], LibraryApiController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], LibraryApiController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_library_api_dto_1.UpdateLibraryApiDto]),
    __metadata("design:returntype", void 0)
], LibraryApiController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], LibraryApiController.prototype, "remove", null);
exports.LibraryApiController = LibraryApiController = __decorate([
    (0, common_1.Controller)('library-api'),
    __metadata("design:paramtypes", [library_api_service_1.LibraryApiService])
], LibraryApiController);
//# sourceMappingURL=library-api.controller.js.map