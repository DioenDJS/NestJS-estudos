import { CreateStundetInput } from './create-stundet.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateStundetInput extends PartialType(CreateStundetInput) {
  @Field(() => Int)
  id: number;
}
