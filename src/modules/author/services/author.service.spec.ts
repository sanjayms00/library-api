import { Test, TestingModule } from '@nestjs/testing';
import { AuthorService } from './author.service';
import { Model } from 'mongoose';
import { getModelToken } from '@nestjs/mongoose';
import { CreateAuthorDto } from '../dtos/create-author-request.dto';
import { Author } from '../interfaces/author.interface';

describe('AuthorService', () => {
  let service: AuthorService;
  let model: Model<Author>;

  const mockAuthorService = {
    save: jest.fn(),
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        AuthorService,
        {
          provide: getModelToken('AUTHOR_MODEL'),
          useValue: mockAuthorService,
        },
      ],
    }).compile();

    service = module.get<AuthorService>(AuthorService);
    model = module.get<Model<Author>>(getModelToken('AUTHOR_MODEL'));
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  describe('createAuthor', () => {
    it('should create a new author', async () => {
      const createAuthorDto: CreateAuthorDto = {
        name: 'abhijith kk',
        biography: 'test biograry',
        birthdate: new Date('2000-02-11T00:00:00.000Z'),
      };

      const mockAuthor = {
        name: 'abhijith kk',
        biography: 'test biograry',
        birthdate: '2000-02-11T00:00:00.000Z',
        _id: '6671133aefa7599cd0e10cf8',
        __v: 0,
      };

      jest
        .spyOn(model.prototype, 'save')
        .mockImplementationOnce(() => Promise.resolve(mockAuthor));

      const result = await service.createAuthor(createAuthorDto);

      expect(result).toEqual(mockAuthor);
      expect(model.prototype.save).toHaveBeenCalled();
      expect(model).toHaveBeenCalledWith(createAuthorDto);
    });
  });
});
