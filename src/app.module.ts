import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { AppService } from './app.service';

@Module({
  imports: [
    GraphQLModule.forRoot({}),
  ],
  providers: [AppService],
})
export class AppModule {}
