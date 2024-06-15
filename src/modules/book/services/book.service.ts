import { Inject, Injectable, NotFoundException } from '@nestjs/common';
import { Book } from '../interfaces/book.interface';
import { UpdateBookDto } from '../dtos/update-book-request.dto';
import { CreateBookDto } from '../dtos/create-book-request.dto';
import { Model } from 'mongoose';

@Injectable()
export class BookService {
  constructor(
    @Inject('BOOK_MODEL')
    private BookModel: Model<Book>,
  ) {}

  //create Book
  async createBook(createBook: CreateBookDto): Promise<Book> {
    const createdBook = await new this.BookModel(createBook);
    return createdBook.save();
  }

  //update Book
  async updateBook(updateBook: UpdateBookDto): Promise<any> {
    const { _id, authorId, description, title } = updateBook;

    const findBookExist = await this.getBookById(_id);

    if (!findBookExist || findBookExist.length <= 0) {
      return new NotFoundException('Book not found');
    }

    const updatedBook = await this.BookModel.updateOne(
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
    const BookDeleted = await this.BookModel.deleteOne({
      _id: id,
    }).exec();

    return BookDeleted;
  }

  //all Books
  async getAllBooks(): Promise<Book[] | []> {
    //execute the query and return a promise
    return this.BookModel.find().exec();
  }

  //get Book by id
  async getBookById(id: string): Promise<Book[] | []> {
    //execute the query and return a promise
    const BookDetails: Book[] = await this.BookModel.find({
      _id: id,
    }).exec();

    return BookDetails ? BookDetails : [];
  }
}
