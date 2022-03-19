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
  @Column('char', { name: 'code', length: 20, unique: true })
  code: string;

  @IsString()
  @IsNotEmpty()
  @Column('char', { name: 'name', length: 40 })
  name: string;

  @IsString()
  @IsNotEmpty()
  @Column('char', { name: 'type', length: 20 })
  type: string;

  @IsString()
  @IsNotEmpty()
  @Column('char', { name: 'price', length: 20 })
  price: number;

  @IsString()
  @IsNotEmpty()
  @Column('char', { name: 'dibs', length: 20 })
  dibs: number;

  @IsString()
  @IsNotEmpty()
  @Column('char', { name: 'perchase_quantity', length: 20 })
  perchase_quantity: number;

  @IsString()
  @IsNotEmpty()
  @Column('text', { name: 'image' })
  image: string;

  //////////////////////////////////////

  @OneToMany(
    () => ProductSailInfo,
    (ProductSailInfo) => ProductSailInfo.ProductSailInfoCode,
  )
  productSailInfo: ProductSailInfo[];

  @OneToMany(() => ProductSubImg, (productSubImg) => productSubImg.SubImgcode)
  productSubImg: ProductSubImg[];
}
