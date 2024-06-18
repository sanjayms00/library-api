import { Test, TestingModule } from '@nestjs/testing';
import { BookService } from './book.service';
import { Book } from '../interfaces/book.interface';
import { getModelToken } from '@nestjs/mongoose';
import { CreateBookDto } from '../dtos/create-book-request.dto';

describe('BookService', () => {
  let service: BookService;
  let model: Model<Book>;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        BookService,
        {
          provide: getModelToken('BOOK_MODEL'),
          useValue: {
            new: jest.fn(),
            constructor: jest.fn(),
            find: jest.fn(),
            findOne: jest.fn(),
            findOneAndUpdate: jest.fn(),
            findOneAndDelete: jest.fn(),
            remove: jest.fn(),
            save: jest.fn(),
            exec: jest.fn(),
          },
        },
      ],
    }).compile();

    service = module.get<BookService>(BookService);
    model = module.get<Model<Book>>(getModelToken('BOOK_MODEL'));
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  describe('createBook', () => {
    it('should create a new book', async () => {
      const createBookDto: CreateBookDto = {
        title: 'book2',
        description: 'book description',
        authorId: '666df0683c01f0320798e64b',
        publishedDate: new Date('2024-02-05T00:00:00.000Z'),
      };

      const mockBook = {
        ...createBookDto,
        _id: '66711bacf04530beec0b2f17',
        __v: 0,
      };

      jest
        .spyOn(model.prototype, 'save')
        .mockImplementationOnce(() => Promise.resolve(mockBook));

      const result = await service.createBook(createBookDto);

      expect(result).toEqual(mockBook);
      expect(model.prototype.save).toHaveBeenCalled();
      expect(model.prototype.save).toHaveBeenCalledWith();
    });
  });
});
