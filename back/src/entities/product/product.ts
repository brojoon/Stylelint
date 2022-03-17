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

import { ProductSubImg } from './product.sub.img';

@Entity({ schema: 'stylelint', name: 'product' })
export class Product {
  @PrimaryGeneratedColumn({ type: 'int', name: 'id' })
  id: number;

  @IsString()
  @IsNotEmpty()
  @Column('char', { name: 'code', length: 40, unique: true })
  code: string;

  @IsString()
  @IsNotEmpty()
  @Column('char', { name: 'name', length: 40 })
  name: string;

  @IsString()
  @IsNotEmpty()
  @Column('char', { name: 'type', length: 40 })
  type: string;

  @IsString()
  @IsNotEmpty()
  @Column('text', { name: 'image' })
  image: string;

  //////////////////////////////////////

  // @OneToMany(
  //   () => ProductSailInfo,
  //   (ProductSailInfo) => ProductSailInfo.product,
  // )
  // productSailInfo: ProductSailInfo[];

  @OneToMany(() => ProductSubImg, (productSubImg) => productSubImg.SubImgcode)
  productSubImgCode: ProductSubImg[];
}
