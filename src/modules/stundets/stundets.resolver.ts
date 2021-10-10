import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { StundetsService } from './stundets.service';
import { Stundet } from './entities/stundet.entity';
import { CreateStundetInput } from './dto/create-stundet.input';
import { UpdateStundetInput } from './dto/update-stundet.input';

@Resolver(() => Stundet)
export class StundetsResolver {
  constructor(private readonly stundetsService: StundetsService) {}

  @Mutation(() => Stundet)
  createStundet(@Args('createStundetInput') createStundetInput: CreateStundetInput) {
    return this.stundetsService.create(createStundetInput);
  }

  @Query(() => [Stundet], { name: 'stundets' })
  findAll() {
    return this.stundetsService.findAll();
  }

  @Query(() => Stundet, { name: 'stundet' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.stundetsService.findOne(id);
  }

  @Mutation(() => Stundet)
  updateStundet(@Args('updateStundetInput') updateStundetInput: UpdateStundetInput) {
    return this.stundetsService.update(updateStundetInput.id, updateStundetInput);
  }

  @Mutation(() => Stundet)
  removeStundet(@Args('id', { type: () => Int }) id: number) {
    return this.stundetsService.remove(id);
  }
}
