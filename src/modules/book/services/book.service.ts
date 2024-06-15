import { Inject, Injectable, NotFoundException } from '@nestjs/common';
import { Book } from '../interfaces/book.interface';
import { UpdateBookDto } from '../dtos/update-book-request.dto';
import { CreateBookDto } from '../dtos/create-book-request.dto';
import { Model } from 'mongoose';

@Injectable()
export class BookService {
  constructor(
    @Inject('BOOK_MODEL')
    private bookModel: Model<Book>,
  ) {}

  //create Book
  async createBook(createBook: CreateBookDto): Promise<Book> {
    const createdBook = await new this.bookModel(createBook);
    return createdBook.save();
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
  async getAllBooks(pgNo = 0): Promise<Book[] | []> {
    //execute the query and return a promise
    const limit = 3;
    const pages = limit * pgNo;

    //execute the query and return a promise
    return this.bookModel.find().skip(pages).limit(limit).exec();
  }

  //get Book by id
  async getBookById(id: string): Promise<Book[] | []> {
    //execute the query and return a promise
    const BookDetails: Book[] = await this.bookModel
      .find({
        _id: id,
      })
      .exec();

    return BookDetails ? BookDetails : [];
  }
}
