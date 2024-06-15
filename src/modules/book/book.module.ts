import { Module } from '@nestjs/common';
import { BookService } from './services/book.service';
import { BookController } from './controllers/book.controller';
import { DatabaseModule } from 'src/database/database.module';
import { bookProviders } from './providers/book.providers';

@Module({
  imports: [DatabaseModule],
  controllers: [BookController],
  providers: [BookService, ...bookProviders],
  exports: [...bookProviders],
})
export class BookModule {}
