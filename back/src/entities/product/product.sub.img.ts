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
import { Product } from './product';

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
  @Column('char', { name: 'code', length: 40 })
  code: string;

  ///////////////////

  @ManyToOne(() => Product, (product) => product.productSubImgCode, {
    onDelete: 'NO ACTION',
    onUpdate: 'CASCADE',
  })
  @JoinColumn([{ name: 'code', referencedColumnName: 'code' }])
  SubImgcode: Product;
}
