import { Module } from '@nestjs/common';
import { AuthorModule } from './modules/author/author.module';
import { BookModule } from './modules/book/book.module';
import { DatabaseModule } from './database/database.module';

@Module({
  imports: [AuthorModule, BookModule, DatabaseModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
