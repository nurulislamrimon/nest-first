import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  username: string;
  @Column()
  password: string;
  @Column()
  email: string;
  @Column()
  age: number;
  @Column({ default: 0 })
  amount: number;
  @Column()
  createdAt: Date;
  @Column()
  updatedAt: Date;
}
