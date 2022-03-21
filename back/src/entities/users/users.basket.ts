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

@Entity({ schema: 'stylelint', name: 'usersBasket' })
export class UsersBasket {
  @PrimaryGeneratedColumn({ type: 'int', name: 'id' })
  id: number;

  @IsString()
  @IsNotEmpty()
  @ApiProperty({
    description: '유저아이디',
    example: 'brojoon',
    required: true,
  })
  @Column('char', { name: 'userId', unique: true, length: 15 })
  userId: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty({
    description: '상품 이름',
    example: '3M 자동차 활성탄 에어컨필터 6285 SM6 QM6 에어컨필',
    required: true,
  })
  @Column('char', { name: 'product_name', unique: true, length: 30 })
  productName: string;

  @IsString()
  @IsNotEmpty()
  @Column('int', { name: 'price' })
  price: number;

  @IsString()
  @IsNotEmpty()
  @Column('int', { name: 'quantity' })
  quantity: number;

  @IsString()
  @IsNotEmpty()
  @Column('text', { name: 'image' })
  image: string;
}
