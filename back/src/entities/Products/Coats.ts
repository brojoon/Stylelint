import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity({ schema: 'stylelint', name: 'Coats' })
export class Coats {
  @PrimaryGeneratedColumn({ type: 'int', name: 'id' })
  id: number;

  @Column('varchar', { name: 'coatName', length: 30 })
  coatName: string;

  @Column('varchar', { name: 'color', length: 15 })
  color: string;

  @Column('varchar', { name: 'size', length: 15 })
  size: string;

  @Column('int', { name: 'price', nullable: false })
  price: number;

  @Column('int', { name: 'quantity', nullable: false })
  quantity: number;

  @Column('text', { name: 'image' })
  image: string;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @DeleteDateColumn()
  deletedAt: Date | null;
}
