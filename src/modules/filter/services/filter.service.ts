import { Inject, Injectable } from '@nestjs/common';
import { Model, Types } from 'mongoose';
import {
  Book,
  allBookResponse,
} from 'src/modules/book/interfaces/book.interface';
import { publishedDate, searchCriteria } from '../interfaces/search.interface';

@Injectable()
export class FilterService {
  constructor(
    @Inject('BOOK_MODEL')
    private bookModel: Model<Book>,
  ) {}

  //filtering
  //function overloading for having diffent parameters
  async searchBook(word: string): Promise<allBookResponse>;
  async searchBook(word: string, authorId: string): Promise<allBookResponse>;
  async searchBook(
    word: string,
    authorId: string,
    publishedDate: publishedDate,
  ): Promise<allBookResponse>;
  async searchBook(
    word: string,
    authorId: string,
    publishedDate: publishedDate,
    pgNo: number,
  ): Promise<allBookResponse>;

  async searchBook(
    word?: string,
    authorId?: string,
    publishedDate?: publishedDate,
    pgNo = 0,
  ): Promise<allBookResponse> {
    const count = 12;
    const searchCriteria: searchCriteria = {};

    //search criterias
    if (word) {
      searchCriteria.title = {
        $regex: word,
        $options: 'i',
      };
    }

    if (authorId) {
      searchCriteria.authorId = new Types.ObjectId(authorId);
    }

    if (publishedDate && publishedDate.start && publishedDate.end) {
      searchCriteria.publishedDate = {
        $gte: new Date(publishedDate.start),
        $lte: new Date(publishedDate.end),
      };
    }

    const total = await this.bookModel
      .find(searchCriteria)
      .countDocuments()
      .exec();

    // Case insensitive search using 'i'
    const allBooks = await this.bookModel.aggregate([
      {
        $match: searchCriteria,
      },
      {
        $lookup: {
          from: 'authors',
          localField: 'authorId',
          foreignField: '_id',
          as: 'authorData',
        },
      },
      {
        $unwind: '$authorData',
      },
      {
        $project: {
          __v: 0,
          'authorData.__v': 0,
        },
      },
      {
        $skip: pgNo * count,
      },
      {
        $limit: count,
      },
    ]);

    return { allBooks, total };
  }
}
