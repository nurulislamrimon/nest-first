import { BadRequestException, Injectable, PipeTransform } from '@nestjs/common';

@Injectable()
export class ParseIdPipe implements PipeTransform<string, number> {
  transform(value: string): number {
    const id = parseInt(value, 10);
    if (isNaN(id)) {
      throw new BadRequestException('id Must be a number');
    }
    if (id < 1) {
      throw new BadRequestException('id Must be greater than 0');
    }
    return id;
  }
}
