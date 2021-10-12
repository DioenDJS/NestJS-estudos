import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateUserInput } from './dto/create-user.input';
import { UpdateUserInput } from './dto/update-user.input';
import { User } from './entities/user.entity';

@Injectable()
export class UsersService {

  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>
    ){}

  async findAllUsers():Promise<User[]> {

    const users = await this.userRepository.find();

    return users;
  }  

  async createUser(data: CreateUserInput):Promise<User> {
    const user = this.userRepository.create(data);
    const userSaved = await this.userRepository.save(user);

    if(! userSaved) {
      throw new InternalServerErrorException('Problema para gerar um usuário !');
    }

    return userSaved;
  }

}
