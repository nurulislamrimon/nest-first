import { Module } from '@nestjs/common';
import { AppController } from './greetings/greetings.controller';
import { AppService } from './greetings/greetings.service';
import { UserModule } from './user/user.module';

@Module({
  imports: [UserModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
