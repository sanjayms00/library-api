import * as mongoose from 'mongoose';

export const AuthorSchema = new mongoose.Schema({
  name: { type: String, required: true },
  biography: { type: String, required: true },
  birthdate: { type: Date, required: true },
});
