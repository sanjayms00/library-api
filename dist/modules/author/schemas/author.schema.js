"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthorSchema = void 0;
const mongoose = require("mongoose");
exports.AuthorSchema = new mongoose.Schema({
    name: { type: String, required: true },
    biography: { type: String, required: true },
    birthdate: { type: Date, required: true },
});
//# sourceMappingURL=author.schema.js.map