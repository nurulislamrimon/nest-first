import { Module } from '@nestjs/common';
import { AppController } from './greetings/greetings.controller';
import { AppService } from './greetings/greetings.service';
import { UserModule } from './user/user.module';
import { HeaderModule } from './header/header.module';
import { CustomDecoratorModule } from './custom-decorator/custom-decorator.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { dbConfig } from 'dbConfig';

@Module({
  imports: [
    TypeOrmModule.forRoot(dbConfig),
    UserModule,
    HeaderModule,
    CustomDecoratorModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
