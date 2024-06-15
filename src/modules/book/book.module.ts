import { Module } from '@nestjs/common';
import { BookService } from './services/book.service';
import { BookController } from './controllers/book.controller';

@Module({
  providers: [BookService],
  controllers: [BookController],
})
export class BookModule {}
