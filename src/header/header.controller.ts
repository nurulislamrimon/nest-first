import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Headers,
} from '@nestjs/common';
import { HeaderService } from './header.service';
import { CreateHeaderDto } from './dto/create-header.dto';
import { UpdateHeaderDto } from './dto/update-header.dto';

@Controller('header')
export class HeaderController {
  constructor(private readonly headerService: HeaderService) {}

  @Post()
  create(@Body() createHeaderDto: CreateHeaderDto, @Headers() headers) {
    console.log(headers);

    // return this.headerService.create(createHeaderDto);
    return createHeaderDto;
  }

  @Get()
  findAll() {
    return this.headerService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.headerService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateHeaderDto: UpdateHeaderDto) {
    return this.headerService.update(+id, updateHeaderDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.headerService.remove(+id);
  }
}
