import { Document } from 'mongoose';

export interface Author extends Document {
  readonly _id: string;
  readonly name: string;
  readonly biography: string;
  readonly birthdate: Date;
  readonly __v: number;
}

export interface Authorlist {
  readonly _id: string;
  readonly name: string;
}

export interface allAuthorResponse {
  author: Author[];
  total: number;
}
