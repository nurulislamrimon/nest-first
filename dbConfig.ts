/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable prettier/prettier */
import { MysqlConnectionOptions } from 'typeorm/driver/mysql/MysqlConnectionOptions';

export const dbConfig = (configService: any): MysqlConnectionOptions => ({
  // url: 'mysql://root:Nurul123@localhost:3306/softmind_cop',
  type: 'mysql',
  host: 'localhost',
  port: 3306,
  username: 'root',
  // eslint-disable-next-line @typescript-eslint/no-unsafe-call
  password: configService.get('DB_PASS') as string, // Ensure it's always a string
  database: 'nestjs',
  entities: [__dirname + '/**/*.entity{.ts,.js}'],
  synchronize: true, // never use TRUE in production!
});
