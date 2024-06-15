import { Document } from 'mongoose';

export interface Book extends Document {
  readonly _id: string;
  readonly title: string;
  readonly description: number;
  readonly authorId: string;
  readonly publishedDate: Date;
}
