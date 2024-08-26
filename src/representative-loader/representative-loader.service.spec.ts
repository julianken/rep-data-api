import { Test, TestingModule } from '@nestjs/testing';
import { RepresentativeLoaderService } from './representative-loader.service';

describe('RepresentativeLoaderService', () => {
  let service: RepresentativeLoaderService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [RepresentativeLoaderService],
    }).compile();

    service = module.get<RepresentativeLoaderService>(RepresentativeLoaderService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
