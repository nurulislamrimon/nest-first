/* eslint-disable prettier/prettier */
import { MysqlConnectionOptions } from 'typeorm/driver/mysql/MysqlConnectionOptions';

export const dbConfig: MysqlConnectionOptions = {
  // url: 'mysql://root:Nurul123@localhost:3306/softmind_cop',
  type: 'mysql',
  host: 'localhost',
  port: 3306,
  username: 'root',
  password: 'Nurul123',
  database: 'nestjs',
  entities: [__dirname + '/**/*.entity{.ts,.js}'],
  synchronize: true, // never use TRUE in production!
};
