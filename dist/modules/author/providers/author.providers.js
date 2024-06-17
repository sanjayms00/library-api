"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.authorProviders = void 0;
const author_schema_1 = require("../schemas/author.schema");
exports.authorProviders = [
    {
        provide: 'AUTHOR_MODEL',
        useFactory: (connection) => connection.model('Author', author_schema_1.AuthorSchema),
        inject: ['DATABASE_CONNECTION'],
    },
];
//# sourceMappingURL=author.providers.js.map