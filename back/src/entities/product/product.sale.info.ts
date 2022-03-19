import { IsNotEmpty, IsNumber, IsString } from 'class-validator';
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

@Entity({ schema: 'stylelint', name: 'productSaleInfo' })
export class ProductSailInfo {
  @PrimaryGeneratedColumn({ type: 'int', name: 'id' })
  id: number;

  @IsString()
  @IsNotEmpty()
  @Column('char', { name: 'color', length: 15 })
  color: string;

  @IsString()
  @IsNotEmpty()
  @Column('char', { name: 'size', length: 15 })
  size: string;

  @IsNumber()
  @IsNotEmpty()
  @Column('int', { name: 'quantity', nullable: false })
  quantity: number;

  //////////////////////////////

  @ManyToOne(() => Product, (product) => product.productSailInfo, {
    onDelete: 'NO ACTION',
    onUpdate: 'CASCADE',
  })
  @JoinColumn([{ name: 'code', referencedColumnName: 'code' }])
  ProductSailInfoCode: Product;
}
