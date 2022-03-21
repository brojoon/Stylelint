import { UsersBasket } from './../../entities/users/users.basket';
import { ApiProperty, PickType } from '@nestjs/swagger';

export class BasketAddDto extends PickType(UsersBasket, [
  'userId',
  'product_name',
  'price',
  'quantity',
  'size',
  'color',
  'image',
] as const) {}
