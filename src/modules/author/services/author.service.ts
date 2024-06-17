import {
  ForbiddenException,
  Inject,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { Model } from 'mongoose';
import { Author, Authorlist } from '../interfaces/author.interface';
import { CreateAuthorDto } from '../dtos/create-author-request.dto';
import { UpdateAuthorDto } from '../dtos/update-author-request.dto';
import { Book } from 'src/modules/book/interfaces/book.interface';

@Injectable()
export class AuthorService {
  constructor(
    @Inject('AUTHOR_MODEL')
    private authorModel: Model<Author>,
    @Inject('BOOK_MODEL')
    private bookModel: Model<Book>,
  ) {}

  //create author
  async createAuthor(createAuthor: CreateAuthorDto): Promise<Author> {
    const createdAuthor = await new this.authorModel(createAuthor);
    return createdAuthor.save();
  }

  //update author
  async updateAuthor(updateAuthor: UpdateAuthorDto): Promise<any> {
    const { _id, name, biography, birthdate } = updateAuthor;

    const findAuthorExist = await this.getAuthorById(_id);

    if (!findAuthorExist || findAuthorExist.length <= 0) {
      return new NotFoundException('Author not found');
    }

    const updatedAuthor = await this.authorModel.updateOne(
      {
        _id: _id,
      },
      {
        $set: {
          name: name,
          biography: biography,
          birthdate: birthdate,
        },
      },
    );

    return updatedAuthor;
  }

  //delete author
  async deleteAuthor(id: string) {
    const findAuthorExist = await this.getAuthorById(id);

    if (!findAuthorExist || findAuthorExist.length <= 0) {
      throw new NotFoundException('Author not found');
    }

    const findAuthorBookExist = await this.bookModel.find({
      authorId: id,
    });

    if (findAuthorBookExist || findAuthorBookExist.length > 0) {
      throw new ForbiddenException(
        'The author contains books, this action is forbidden',
      );
    }

    const authorDeleted = await this.authorModel
      .deleteOne({
        _id: id,
      })
      .exec();

    return authorDeleted;
  }

  //all authors
  async getAllAuthors(pgNo = 0): Promise<{ author: Author[]; total: number }> {
    const limit = 12;
    const pages = limit * pgNo;

    const total = await this.authorModel.countDocuments();

    //execute the query and return a promise
    const allAuhtors = await this.authorModel
      .find()
      .skip(pages)
      .limit(limit)
      .exec();

    return { author: allAuhtors, total };
  }

  //get author by id
  async getAuthorById(id: string): Promise<Author[] | []> {
    //execute the query and return a promise
    const authorDetails: Author[] = await this.authorModel
      .find({
        _id: id,
      })
      .exec();

    return authorDetails;
  }

  getAllAuthorList(): Promise<Authorlist[]> {
    return this.authorModel.find({}, { _id: 1, name: 1 });
  }
}
