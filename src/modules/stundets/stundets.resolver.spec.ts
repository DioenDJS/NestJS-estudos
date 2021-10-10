import { Test, TestingModule } from '@nestjs/testing';
import { StundetsResolver } from './stundets.resolver';
import { StundetsService } from './stundets.service';

describe('StundetsResolver', () => {
  let resolver: StundetsResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [StundetsResolver, StundetsService],
    }).compile();

    resolver = module.get<StundetsResolver>(StundetsResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
