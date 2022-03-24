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

@Entity({ schema: 'stylelint', name: 'userRecentPayment' })
export class UserDips {
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
  @Column('char', { name: 'receiver', length: 25, nullable: true })
  receiver: string;

  @IsNotEmpty()
  @Column('int', { name: 'total_price' })
  totalPrice: number;

  @IsNotEmpty()
  @Column('int', { name: 'total_perchase_quantity' })
  perchase_quantity: number;

  @IsString()
  @IsNotEmpty()
  @Column('char', { name: 'address', length: 40 })
  product_name: string;

  @IsString()
  @IsNotEmpty()
  @Column('char', { name: 'phone_number', length: 30 })
  phone_number: string;

  // @Column('varchar', { name: 'userName', length: 15 })
  // userName: string;
}
