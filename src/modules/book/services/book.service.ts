import {
  BadRequestException,
  Inject,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { Book } from '../interfaces/book.interface';
import { UpdateBookDto } from '../dtos/update-book-request.dto';
import { CreateBookDto } from '../dtos/create-book-request.dto';
import { Model, Types } from 'mongoose';

@Injectable()
export class BookService {
  constructor(
    @Inject('BOOK_MODEL')
    private bookModel: Model<Book>,
  ) {}

  //create Book
  async createBook(createBook: CreateBookDto): Promise<Book> {
    const createdBook = await new this.bookModel(createBook).save();

    if (!createdBook) {
      throw new BadRequestException('Unable to create the book');
    }

    return createdBook;
  }

  //update Book
  async updateBook(updateBook: UpdateBookDto): Promise<any> {
    const { _id, authorId, description, title } = updateBook;

    const findBookExist = await this.getBookById(_id);

    if (!findBookExist || findBookExist.length <= 0) {
      return new NotFoundException('Book not found');
    }

    const updatedBook = await this.bookModel.updateOne(
      {
        _id: _id,
      },
      {
        $set: {
          title,
          description,
          authorId,
        },
      },
    );

    if (!updatedBook) {
      throw new BadRequestException('Unable to update the book');
    }

    return updatedBook;
  }

  //delete Book
  async deleteBook(id: string) {
    const findBookExist = await this.getBookById(id);

    if (!findBookExist || findBookExist.length <= 0) {
      return new NotFoundException('Book not found');
    }
    const BookDeleted = await this.bookModel
      .deleteOne({
        _id: id,
      })
      .exec();

    return BookDeleted;
  }

  //all Books
  async getAllBooks(pgNo = 0): Promise<{ allBooks: Book[]; total: number }> {
    const limit = 12;
    const pages = limit * pgNo;
    const total = await this.bookModel.countDocuments().exec();

    const allBooks = await this.bookModel.aggregate([
      {
        $match: {},
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
        $skip: pages,
      },
      {
        $limit: limit,
      },
    ]);

    return { allBooks, total };
  }

  //get Book by id
  async getBookById(id: string): Promise<Book[] | []> {
    //execute the query and return a promise
    const bookDetails: Book[] = await this.bookModel
      .find({
        _id: id,
      })
      .exec();

    return bookDetails ? bookDetails : [];
  }

  async getBookDetails(id: string): Promise<Book[]> {
    let bookData: Book[] = await this.getBookById(id);

    if (!bookData || bookData.length <= 0) {
      throw new NotFoundException('Book not found');
    }

    bookData = await this.bookModel.aggregate([
      {
        $match: { _id: new Types.ObjectId(id) },
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

    return bookData;
  }
}
