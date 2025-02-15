import { Injectable } from '@nestjs/common';
import { CreatePropertyDto } from './dto/create-property.dto';
import { UpdatePropertyDto } from './dto/update-property.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Property } from './entities/property.entity';
import { Repository } from 'typeorm';

@Injectable()
export class PropertyService {
  constructor(
    @InjectRepository(Property) private propertyRepo: Repository<Property>,
  ) {}
  create(createPropertyDto: CreatePropertyDto) {
    return this.propertyRepo.save(createPropertyDto);
  }

  findAll() {
    return this.propertyRepo.find();
  }

  findOne(id: number) {
    return this.propertyRepo.findOneBy({ id });
  }

  update(id: number, updatePropertyDto: UpdatePropertyDto) {
    return this.propertyRepo.update(id, updatePropertyDto);
  }

  remove(id: number) {
    return this.propertyRepo.delete(id);
  }
}
