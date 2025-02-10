import { Controller, Get } from '@nestjs/common';
import { AppService } from './greetings.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): Record<string, unknown> {
    return this.appService.getHello();
  }
}
