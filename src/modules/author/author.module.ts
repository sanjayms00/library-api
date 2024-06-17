import { Module } from '@nestjs/common';
import { AuthorController } from './controllers/author.controller';
import { AuthorService } from './services/author.service';
import { authorProviders } from './providers/author.providers';
import { DatabaseModule } from 'src/database/database.module';
import { bookProviders } from '../book/providers/book.providers';

@Module({
  imports: [DatabaseModule],
  controllers: [AuthorController],
  providers: [AuthorService, ...authorProviders, ...bookProviders],
})
export class AuthorModule {}
