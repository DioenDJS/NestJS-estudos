import { Test, TestingModule } from '@nestjs/testing';
import { StundetsService } from './stundets.service';

describe('StundetsService', () => {
  let service: StundetsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [StundetsService],
    }).compile();

    service = module.get<StundetsService>(StundetsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
