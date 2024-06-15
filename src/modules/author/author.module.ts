import { Module } from '@nestjs/common';
import { AuthorController } from './controllers/author.controller';
import { AuthorService } from './services/author.service';
import { authorProviders } from './providers/author.providers';
import { DatabaseModule } from 'src/database/database.module';

@Module({
  imports: [DatabaseModule],
  controllers: [AuthorController],
  providers: [AuthorService, ...authorProviders],
})
export class AuthorModule {}
