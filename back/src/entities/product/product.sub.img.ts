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

@Entity({ schema: 'stylelint', name: 'productSubImg' })
export class ProductSubImg {
  @PrimaryGeneratedColumn({ type: 'int', name: 'id' })
  id: number;

  @IsString()
  @IsNotEmpty()
  @Column('text', { name: 'subimage' })
  subimage: string;

  @IsString()
  @IsNotEmpty()
  @Column('char', { name: 'kind', length: 10 })
  kind: string;

  @IsString()
  @IsNotEmpty()
  @Column('char', { name: 'code', length: 10 })
  code: string;

  ///////////////////
  @ManyToOne(() => Product, (product) => product.productSubImg, {
    onDelete: 'NO ACTION',
    onUpdate: 'CASCADE',
  })
  @JoinColumn([{ name: 'code', referencedColumnName: 'code' }])
  SubImgcode: Product;
}
