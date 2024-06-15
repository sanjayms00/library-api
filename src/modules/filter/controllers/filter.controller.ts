import { Controller, Get, Query } from '@nestjs/common';
import { FilterService } from '../services/filter.service';
import { FilerSearchDto } from '../dtos/filter-search-request.dto';

@Controller('filter')
export class FilterController {
  constructor(private readonly filterService: FilterService) {}

  //search method combnined for normal search, author based search, date based search
  @Get()
  async searchBook(@Query() filterSearchDto: FilerSearchDto) {
    const { word, authorId, publishedDate } = filterSearchDto;

    return await this.filterService.searchBook(word, authorId, publishedDate);
  }
}
