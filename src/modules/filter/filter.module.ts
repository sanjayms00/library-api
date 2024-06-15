import { Module } from '@nestjs/common';
import { FilterController } from './controllers/filter.controller';
import { FilterService } from './services/filter.service';
import { DatabaseModule } from 'src/database/database.module';
import { bookProviders } from '../book/providers/book.providers';

@Module({
  imports: [DatabaseModule],
  controllers: [FilterController],
  providers: [FilterService, ...bookProviders],
})
export class FilterModule {}
