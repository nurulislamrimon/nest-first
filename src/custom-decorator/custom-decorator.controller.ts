import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  ValidationPipe,
} from '@nestjs/common';
import { CustomDecoratorService } from './custom-decorator.service';
import { CreateCustomDecoratorDto } from './dto/create-custom-decorator.dto';
import { UpdateCustomDecoratorDto } from './dto/update-custom-decorator.dto';
import { RequestHeader } from './pipes/request-header';
import { HeaderDto } from './dto/header.dto';

@Controller('custom-decorator')
export class CustomDecoratorController {
  constructor(
    private readonly customDecoratorService: CustomDecoratorService,
  ) {}

  @Post()
  create(
    @RequestHeader(
      new ValidationPipe({ whitelist: true, validateCustomDecorators: true }),
    )
    header: HeaderDto,
    @Body() createCustomDecoratorDto: CreateCustomDecoratorDto,
  ) {
    console.log(header);

    return this.customDecoratorService.create(createCustomDecoratorDto);
  }

  @Get()
  findAll() {
    return this.customDecoratorService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.customDecoratorService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateCustomDecoratorDto: UpdateCustomDecoratorDto,
  ) {
    return this.customDecoratorService.update(+id, updateCustomDecoratorDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.customDecoratorService.remove(+id);
  }
}
