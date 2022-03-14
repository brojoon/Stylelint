import { ApiProperty } from '@nestjs/swagger';
import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity({ schema: 'stylelint', name: 'users' })
export class Users {
  @PrimaryGeneratedColumn({ type: 'int', name: 'id' })
  id: number;

  @Column('varchar', { name: 'userId', unique: true, length: 15 })
  userId: string;

  // @Column('varchar', { name: 'userName', length: 15 })
  // userName: string;

  @ApiProperty({
    example: '123123',
    description: '비밀번호',
    required: true,
  })
  @Column('varchar', { name: 'password', length: 100, select: false })
  password: string;

  // @Column('varchar', { name: 'zender', length: 5 })
  // zender: string;

  @Column('varchar', { name: 'address', length: 100 })
  address: string;

  // @Column('varchar', { name: 'phoneNumber', length: 20 })
  // phoneNumber: string;

  @Column('varchar', { name: 'email', unique: true, length: 30 })
  email: string;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @DeleteDateColumn()
  deletedAt: Date | null;
}
