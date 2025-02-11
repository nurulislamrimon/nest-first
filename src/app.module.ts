import { Module } from '@nestjs/common';
import { AppController } from './greetings/greetings.controller';
import { AppService } from './greetings/greetings.service';
import { UserModule } from './user/user.module';
import { HeaderModule } from './header/header.module';

@Module({
  imports: [UserModule, HeaderModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
