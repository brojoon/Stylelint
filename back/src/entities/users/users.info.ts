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

@Entity({ schema: 'stylelint', name: 'user' })
export class Users {
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

  // @Column('varchar', { name: 'userName', length: 15 })
  // userName: string;

  @ApiProperty({
    description: '비밀번호',
    example: '123123',
    required: true,
  })
  @Column('varchar', {
    name: 'password',
    length: 100,
    select: false,
    nullable: true,
  })
  password: string;

  // @Column('varchar', { name: 'zender', length: 5 })
  // zender: string;

  @Column('char', { name: 'address', length: 100, nullable: true })
  address: string;

  // @Column('varchar', { name: 'phoneNumber', length: 20 })
  // phoneNumber: string;

  @Column('char', { name: 'email', length: 30, nullable: true })
  email: string;

  @Column('char', {
    name: 'phone_number',
    length: 15,
    nullable: true,
  })
  phone_number: string;

  @IsString()
  @ApiProperty({
    description: '유저닉네임',
    example: '홍길동',
  })
  @Column('char', { name: 'nickname', length: 30 })
  nickname: string;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @DeleteDateColumn()
  deletedAt: Date | null;
}
