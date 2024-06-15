import { Inject, Injectable } from '@nestjs/common';
import { Model, Types } from 'mongoose';
import { Book } from 'src/modules/book/interfaces/book.interface';
import { searchCriteria } from '../interfaces/search.interface';

@Injectable()
export class FilterService {
  constructor(
    @Inject('BOOK_MODEL')
    private bookModel: Model<Book>,
  ) {}

  //filtering
  //function overloading for having diffent parameters
  async searchBook(word: string): Promise<Book[]>;
  async searchBook(word: string, authorId: string): Promise<Book[]>;
  async searchBook(
    word: string,
    authorId: string,
    publishedDate: string,
  ): Promise<Book[]>;

  async searchBook(
    word?: string,
    authorId?: string,
    publishedDate?: string,
  ): Promise<Book[]> {
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
    if (publishedDate) {
      searchCriteria.publishedDate = new Date(publishedDate);
    }

    console.log(searchCriteria);

    // Case insensitive search using 'i'
    const searchedBooks = await this.bookModel.aggregate([
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
    ]);

    return searchedBooks;
  }
}
