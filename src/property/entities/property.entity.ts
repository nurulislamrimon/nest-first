import { PropertyFeature } from 'src/property-feature/entities/property-feature.entity';
import {
  Column,
  CreateDateColumn,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

export class Property {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  name: string;

  @Column()
  price: number;
  @Column()
  description: string;

  @CreateDateColumn({ type: 'timestamp' })
  createdAt: Date;
  @CreateDateColumn({ type: 'timestamp' })
  updatedAt: Date;

  @OneToOne(
    () => PropertyFeature,
    // (propertyFeature) => propertyFeature.property,
  )
  propertyFeature: PropertyFeature;
}
