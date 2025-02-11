import { Module } from '@nestjs/common';
import { HeaderService } from './header.service';
import { HeaderController } from './header.controller';

@Module({
  controllers: [HeaderController],
  providers: [
    HeaderService,
    // {
    //   provide: 'APP_PIPE',
    //   useValue: new ValidationPipe({
    //     whitelist: true,
    //     forbidNonWhitelisted: true,
    //     transform: true,
    //     transformOptions: {
    //       enableImplicitConversion: true,
    //     },
    //   }),
    // },
  ],
})
export class HeaderModule {}
