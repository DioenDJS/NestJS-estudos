import { ObjectType, Field, Int } from '@nestjs/graphql';

@ObjectType()
export class Stundet {
  @Field(() => Int, { description: 'Example field (placeholder)' })
  exampleField: number;
}
