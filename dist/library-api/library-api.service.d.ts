import { CreateLibraryApiDto } from './dto/create-library-api.dto';
import { UpdateLibraryApiDto } from './dto/update-library-api.dto';
export declare class LibraryApiService {
    create(createLibraryApiDto: CreateLibraryApiDto): string;
    findAll(): string;
    findOne(id: number): string;
    update(id: number, updateLibraryApiDto: UpdateLibraryApiDto): string;
    remove(id: number): string;
}
