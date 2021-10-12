import { Injectable, InternalServerErrorException, NotFoundException } from '@nestjs/common';
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

  async findOneUser(id: string):Promise<User>{
    
    const user = await this.userRepository.findOne(id)

    if(! user){
      throw new NotFoundException("Usuário não existe !")
    }
    return user;
  }
  async updateUser(userId:string, updateUserInput: UpdateUserInput):Promise<User>{

    const user = await this.findOneUser(userId);

    await this.userRepository.update(user, {...updateUserInput});

    const userUpdated = this.userRepository.create({...user, ...updateUserInput});

    return userUpdated;
  }

}
