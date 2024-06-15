import { Inject, Injectable, NotFoundException } from '@nestjs/common';
import { Model } from 'mongoose';
import { Author } from '../interfaces/author.interface';
import { CreateAuthorDto } from '../dtos/create-author-request.dto';
import { UpdateAuthorDto } from '../dtos/update-author-request.dto';

@Injectable()
export class AuthorService {
  constructor(
    @Inject('AUTHOR_MODEL')
    private authorModel: Model<Author>,
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
      return new NotFoundException('Author not found');
    }
    const authorDeleted = await this.authorModel
      .deleteOne({
        _id: id,
      })
      .exec();

    return authorDeleted;
  }

  //all authors
  async getAllAuthors(): Promise<Author[] | []> {
    //execute the query and return a promise
    return this.authorModel.find().exec();
  }

  //get author by id
  async getAuthorById(id: string): Promise<Author[] | []> {
    //execute the query and return a promise
    const authorDetails: Author[] = await this.authorModel
      .find({
        _id: id,
      })
      .exec();

    return authorDetails ? authorDetails : [];
  }
}
