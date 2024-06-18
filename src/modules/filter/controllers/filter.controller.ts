import { Controller, Get, Query } from '@nestjs/common';
import { FilterService } from '../services/filter.service';
import { FilerSearchDto } from '../dtos/filter-search-request.dto';
import { publishedDate } from '../interfaces/search.interface';
import { Book } from 'src/modules/book/interfaces/book.interface';
import { ApiOperation, ApiQuery, ApiResponse } from '@nestjs/swagger';

@Controller('filter')
export class FilterController {
  constructor(private readonly filterService: FilterService) {}

  //search method combnined for normal search, author based search, date based search
  @Get()
  @ApiOperation({ summary: 'Get all Book list with filtering and pagination' })
  @ApiQuery({
    name: 'authorId',
    required: false,
    description: 'Filter by author ID',
  })
  @ApiQuery({
    name: 'startDate',
    required: false,
    description: 'Filter by start date',
    type: 'string',
    example: '2024-02-02T00:00:00.000Z',
  })
  @ApiQuery({
    name: 'endDate',
    required: false,
    description: 'Filter by end date',
    type: 'string',
    example: '2024-02-05T00:00:00.000Z',
  })
  @ApiQuery({
    name: 'pgNo',
    required: false,
    description: 'Page number',
    type: 'string',
  })
  @ApiQuery({
    name: 'word',
    required: false,
    description: 'Search with word',
    type: 'string',
  })
  @ApiResponse({
    status: 200,
    description: 'List of book with pagination',
  })
  async searchBook(
    @Query() filterSearchDto: FilerSearchDto,
  ): Promise<{ allBooks: Book[]; total: number }> {
    const { word, authorId, startDate, endDate, pgNo } = filterSearchDto;

    let pageNo = 0;
    if (pgNo) {
      pageNo = Number(pgNo);
    }

    const publishedDate: publishedDate = {};

    if (startDate && endDate) {
      publishedDate.start = startDate;
      publishedDate.end = endDate;
    }

    return await this.filterService.searchBook(
      word,
      authorId,
      publishedDate,
      pageNo,
    );
  }
}
