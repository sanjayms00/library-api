import { LibraryApiService } from './library-api.service';
import { CreateLibraryApiDto } from './dto/create-library-api.dto';
import { UpdateLibraryApiDto } from './dto/update-library-api.dto';
export declare class LibraryApiController {
    private readonly libraryApiService;
    constructor(libraryApiService: LibraryApiService);
    create(createLibraryApiDto: CreateLibraryApiDto): string;
    findAll(): string;
    findOne(id: string): string;
    update(id: string, updateLibraryApiDto: UpdateLibraryApiDto): string;
    remove(id: string): string;
}
