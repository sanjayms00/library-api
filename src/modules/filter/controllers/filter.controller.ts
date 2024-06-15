import { Controller, Get, Query } from '@nestjs/common';
import { FilterService } from '../services/filter.service';
import { FilerSearchDto } from '../dtos/filter-search-request.dto';
import { publishedDate } from '../interfaces/search.interface';

@Controller('filter')
export class FilterController {
  constructor(private readonly filterService: FilterService) {}

  //search method combnined for normal search, author based search, date based search
  @Get()
  async searchBook(@Query() filterSearchDto: FilerSearchDto) {
    const { word, authorId, startDate, endDate } = filterSearchDto;

    const publishedDate: publishedDate = {};

    if (startDate && endDate) {
      publishedDate.start = startDate;
      publishedDate.end = endDate;
    }

    return await this.filterService.searchBook(word, authorId, publishedDate);
  }
}
