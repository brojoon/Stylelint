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

@Entity({ schema: 'stylelint', name: 'user_recent_payment' })
export class UserPaymentRecent {
  @PrimaryGeneratedColumn({ type: 'int', name: 'id' })
  id: number;

  @IsString()
  @IsNotEmpty()
  @ApiProperty({
    description: '유저아이디',
    example: 'brojoon',
    required: true,
  })
  @Column('char', { name: 'userId', unique: true, length: 30 })
  userId: string;

  @IsString()
  @Column('char', { name: 'receiver', length: 25, nullable: true })
  receiver: string;

  @IsNotEmpty()
  @Column('int', { name: 'total_price' })
  total_price: number;

  @IsNotEmpty()
  @Column('int', { name: 'total_purchase_quantity' })
  total_purchase_quantity: number;

  @IsString()
  @IsNotEmpty()
  @Column('char', { name: 'address', length: 100 })
  address: string;

  @IsString()
  @IsNotEmpty()
  @Column('char', { name: 'phone_number', length: 30 })
  phone_number: string;
}
