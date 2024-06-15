import { Document } from 'mongoose';

export interface Author extends Document {
  readonly _id: string;
  readonly name: string;
  readonly biography: string;
  readonly birthdate: Date;
  readonly __v: number;
}
