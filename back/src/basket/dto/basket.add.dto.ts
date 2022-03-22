import { Basket } from '../../entities/basket/basket';
import { ApiProperty, PickType } from '@nestjs/swagger';

export class BasketAddDto extends PickType(Basket, [
  'userId',
  'product_name',
  'price',
  'quantity',
  'size',
  'color',
  'image',
] as const) {}
