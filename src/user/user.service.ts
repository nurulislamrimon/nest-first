import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Injectable()
export class UserService {
  create(createUserDto: CreateUserDto) {
    return 'This action adds a new user ' + JSON.stringify(createUserDto);
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
