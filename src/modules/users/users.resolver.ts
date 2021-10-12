import { Resolver, Query, Mutation, Args, ID } from '@nestjs/graphql';
import { UsersService } from './users.service';
import { User } from './entities/user.entity';
import { CreateUserInput } from './dto/create-user.input';
import { UpdateUserInput } from './dto/update-user.input';
import { UserDTO } from './dto/user.dto';

@Resolver(() => User)
export class UsersResolver {
  constructor(private readonly usersService: UsersService) {}
  
  // @Query(() => [User], { name: 'users' })
  @Query(() => [UserDTO])
  async findAllUser():Promise<User[]> {
    
    const users = await this.usersService.findAllUsers();
    
    return users;
  }

  @Mutation(() => UserDTO)
  async createUser(@Args('data') data: CreateUserInput):Promise<User> {

    const user = await this.usersService.createUser(data);

    return user;

  }


  @Query(() => UserDTO)
  async findOneUser(@Args('id', { type: () => ID }) id: string):Promise<User> {
   
    const user = await this.usersService.findOneUser(id);
    return user;
  }

  @Mutation(() => UserDTO)
  async updateUser(@Args('id') id:string, @Args('data') data: UpdateUserInput) {
    
    const user = await this.usersService.updateUser(id, data);
    
    return user;

  }

  @Mutation(() => Boolean)
  async removeUser(@Args('id', { type: () => ID }) id: string):Promise<Boolean> {
    
    const deleted = await this.usersService.removeUser(id);
    
    return deleted;
  }
}
