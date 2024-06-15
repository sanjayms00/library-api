import { Inject, Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { Author } from '../interfaces/author.interface';

@Injectable()
export class AuthorService {
  constructor(
    @Inject('AUTHOR_MODEL')
    private authorModel: Model<Author>,
  ) {}

  //create author
  async createAuthor() {}

  //update author
  async updateAuthor() {}

  //delete author
  async deleteAuthor() {}

  //all authors
  async getAllAuthors() {}

  //get author by id
  async getAuthorById() {}
}
