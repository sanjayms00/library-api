"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateLibraryApiDto = void 0;
const mapped_types_1 = require("@nestjs/mapped-types");
const create_library_api_dto_1 = require("./create-library-api.dto");
class UpdateLibraryApiDto extends (0, mapped_types_1.PartialType)(create_library_api_dto_1.CreateLibraryApiDto) {
}
exports.UpdateLibraryApiDto = UpdateLibraryApiDto;
//# sourceMappingURL=update-library-api.dto.js.map