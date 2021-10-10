import { Module } from '@nestjs/common';
import { StundetsService } from './stundets.service';
import { StundetsResolver } from './stundets.resolver';

@Module({
  providers: [StundetsResolver, StundetsService]
})
export class StundetsModule {}
