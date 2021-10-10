import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreateStundetInput {
  @Field(() => Int, { description: 'Example field (placeholder)' })
  exampleField: number;
}
