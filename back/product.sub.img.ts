import { IsNotEmpty, IsString } from 'class-validator';
import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { Product } from './product.info';

@Entity({ schema: 'stylelint', name: 'product' })
export class ProductSubImg {
  @PrimaryGeneratedColumn({ type: 'int', name: 'id' })
  id: number;

  @IsString()
  @IsNotEmpty()
  @Column('char', { name: 'code', length: 40 })
  code: string;

  @IsString()
  @IsNotEmpty()
  @Column('text', { name: 'image' })
  image: string;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @DeleteDateColumn()
  deletedAt: Date | null;

  ///////////////////

  @ManyToOne(() => Product, (product) => product.productSubImgs, {
    onDelete: 'NO ACTION',
    onUpdate: 'CASCADE',
  })
  product: Product;
}
