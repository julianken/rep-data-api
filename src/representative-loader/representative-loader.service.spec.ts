import { Test, TestingModule } from '@nestjs/testing';
import { RepresentativeLoaderService } from './representative-loader.service';
import { ConfigModule } from '@nestjs/config';
import { config } from 'dotenv';

describe('RepresentativeLoaderService', () => {
  let service: RepresentativeLoaderService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [RepresentativeLoaderService],
      imports: [
        ConfigModule.forFeature(async () => ({ 
          apiKey: 'test-api-key',
        })),
    ],
    }).compile();

    service = module.get<RepresentativeLoaderService>(RepresentativeLoaderService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
