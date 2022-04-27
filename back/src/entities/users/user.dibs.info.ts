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

@Entity({ schema: 'stylelint', name: 'user_dibs' })
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
  @IsNotEmpty()
  @Column('char', { name: 'product_name', length: 40 })
  product_name: string;

  // @Column('varchar', { name: 'userName', length: 15 })
  // userName: string;
}
