import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { Repository } from 'typeorm';

@Injectable()
export class UserService {
  constructor(@InjectRepository(User) private userRepo: Repository<User>) {}

  async create(createUserDto: CreateUserDto) {
    return await this.userRepo.save(createUserDto);
  }

  findAll() {
    return `This action returns all user`;
  }

  findOne(id: number) {
    return `This action returns a #${id} user`;
  }

  update(query: Record<string, string>, updateUserDto: UpdateUserDto) {
    return `This action updates a #${JSON.stringify(query)} user ${JSON.stringify(
      updateUserDto,
    )}`;
  }

  remove(query: Record<string, string>) {
    return `This action removes a #${JSON.stringify(query)} user`;
  }
}
