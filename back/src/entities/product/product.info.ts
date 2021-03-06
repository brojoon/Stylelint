import { IsNotEmpty, IsString } from 'class-validator';
import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { ProductSailInfo } from './product.sale.info';

import { ProductSubImg } from './product.sub.img';

@Entity({ schema: 'stylelint', name: 'product' })
export class Product {
  @PrimaryGeneratedColumn({ type: 'int', name: 'id' })
  id: number;

  @IsString()
  @IsNotEmpty()
  @Column('char', { name: 'code', length: 10, unique: true })
  code: string;

  @IsString()
  @IsNotEmpty()
  @Column('char', { name: 'name', length: 40 })
  name: string;

  @IsString()
  @IsNotEmpty()
  @Column('char', { name: 'type', length: 20 })
  type: string;

  @IsNotEmpty()
  @Column('int', { name: 'price' })
  price: number;

  @IsNotEmpty()
  @Column('int', { name: 'dibs' })
  dibs: number;

  @Column('int', { name: 'perchase_quantity' })
  perchase_quantity: number;

  @Column('int', { name: 'review_count' })
  review_count: number;

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

  //////////////////////////////////////

  @OneToMany(
    () => ProductSailInfo,
    (ProductSailInfo) => ProductSailInfo.ProductSailInfoCode,
  )
  productSailInfo: ProductSailInfo[];

  @OneToMany(() => ProductSubImg, (productSubImg) => productSubImg.SubImgcode)
  productSubImg: ProductSubImg[];
}
