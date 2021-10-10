import { Injectable } from '@nestjs/common';
import { CreateStundetInput } from './dto/create-stundet.input';
import { UpdateStundetInput } from './dto/update-stundet.input';

@Injectable()
export class StundetsService {
  create(createStundetInput: CreateStundetInput) {
    return 'This action adds a new stundet';
  }

  findAll() {
    return `This action returns all stundets`;
  }

  findOne(id: number) {
    return `This action returns a #${id} stundet`;
  }

  update(id: number, updateStundetInput: UpdateStundetInput) {
    return `This action updates a #${id} stundet`;
  }

  remove(id: number) {
    return `This action removes a #${id} stundet`;
  }
}
