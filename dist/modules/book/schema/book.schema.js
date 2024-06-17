"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BookSchema = void 0;
const mongoose = require("mongoose");
exports.BookSchema = new mongoose.Schema({
    title: { type: String, required: true },
    description: { type: String, required: true },
    authorId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Author',
        required: true,
    },
    publishedDate: { type: Date, required: true },
});
//# sourceMappingURL=book.schema.js.map