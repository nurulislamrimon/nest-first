import { Module } from '@nestjs/common';
import { AppController } from './greetings/greetings.controller';
import { AppService } from './greetings/greetings.service';
import { UserModule } from './user/user.module';
import { HeaderModule } from './header/header.module';
import { CustomDecoratorModule } from './custom-decorator/custom-decorator.module';

@Module({
  imports: [UserModule, HeaderModule, CustomDecoratorModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
