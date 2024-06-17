import { FilterService } from '../services/filter.service';
import { FilerSearchDto } from '../dtos/filter-search-request.dto';
import { Book } from 'src/modules/book/interfaces/book.interface';
export declare class FilterController {
    private readonly filterService;
    constructor(filterService: FilterService);
    searchBook(filterSearchDto: FilerSearchDto): Promise<{
        allBooks: Book[];
        total: number;
    }>;
}
