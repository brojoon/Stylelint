import { ApiProperty } from '@nestjs/swagger';
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

@Entity({ schema: 'stylelint', name: 'product_review' })
export class ProductReview {
  @PrimaryGeneratedColumn({ type: 'int', name: 'id' })
  id: number;

  @IsString()
  @IsNotEmpty()
  @Column('char', { name: 'product_code', length: 10 })
  product_code: string;

  @IsString()
  @IsNotEmpty()
  @Column('char', { name: 'userId', length: 30 })
  userId: string;

  @IsString()
  @Column('char', { name: 'nickname', length: 30 })
  nickname: string;

  @IsString()
  @IsNotEmpty()
  @Column('char', { name: 'review_text', length: 100 })
  review_text: string;

  @IsNotEmpty()
  @Column('int', { name: 'score' })
  score: number;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @DeleteDateColumn()
  deletedAt: Date | null;

  //////////////////////////////////////
}
