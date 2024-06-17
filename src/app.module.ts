import { Module } from '@nestjs/common';
import { AuthorModule } from './modules/author/author.module';
import { BookModule } from './modules/book/book.module';
import { DatabaseModule } from './database/database.module';
import { FilterModule } from './modules/filter/filter.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    AuthorModule,
    BookModule,
    DatabaseModule,
    FilterModule,
    ConfigModule.forRoot({ isGlobal: true }),
  ],
})
export class AppModule {}
