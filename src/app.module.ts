import { Module } from '@nestjs/common';
import { AuthorModule } from './modules/author/author.module';
import { BookModule } from './modules/book/book.module';
import { DatabaseModule } from './database/database.module';
import { FilterModule } from './modules/filter/filter.module';

@Module({
  imports: [AuthorModule, BookModule, DatabaseModule, FilterModule],
})
export class AppModule {}
