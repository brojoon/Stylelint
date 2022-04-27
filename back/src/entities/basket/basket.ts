import { ApiProperty } from '@nestjs/swagger';
import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { IsNotEmpty, IsString } from 'class-validator';

@Entity({ schema: 'stylelint', name: 'basket' })
export class Basket {
  @PrimaryGeneratedColumn({ type: 'int', name: 'id' })
  id: number;

  @IsString()
  @IsNotEmpty()
  @ApiProperty({
    description: '유저아이디',
    example: 'brojoon',
    required: true,
  })
  @Column('char', { name: 'userId', length: 30 })
  userId: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty({
    description: '상품 이름',
    example: '3M 자동차 활성탄 에어컨필터 6285 SM6 QM6 에어컨필',
    required: true,
  })
  @Column('char', { name: 'product_name', length: 100 })
  product_name: string;

  @IsNotEmpty()
  @Column('int', { name: 'price' })
  price: number;

  @IsNotEmpty()
  @Column('int', { name: 'quantity' })
  quantity: number;

  @Column('char', { name: 'size', length: 10 })
  size: string;

  @Column('char', { name: 'color', length: 10 })
  color: string;

  @IsString()
  @IsNotEmpty()
  @Column('text', { name: 'image' })
  image: string;
}
