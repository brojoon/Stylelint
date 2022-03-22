import { Basket } from './../entities/basket/basket';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { BasketAddDto } from './dto/basket.add.dto';

@Injectable()
export class BasketService {
  constructor(
    @InjectRepository(Basket)
    private usersBasketRepository: Repository<Basket>,
  ) {}
  async basketInfo(userId: string) {
    try {
      const result = await this.usersBasketRepository.find({
        select: [
          'id',
          'product_name',
          'price',
          'quantity',
          'size',
          'color',
          'image',
        ],
        where: {
          userId: userId,
        },
      });
      return result;
    } catch (error) {}
  }

  async basketAdd(product: BasketAddDto) {
    try {
      const result = await this.usersBasketRepository.findOne({
        select: [
          'id',
          'userId',
          'product_name',
          'price',
          'quantity',
          'size',
          'color',
          'image',
        ],
        where: {
          userId: product.userId,
          product_name: product.product_name,
          size: product.size,
          color: product.color,
        },
      });
      if (!result) {
        this.usersBasketRepository.save({
          userId: product.userId,
          product_name: product.product_name,
          price: product.price,
          quantity: product.quantity,
          size: product.size,
          color: product.color,
          image: product.image,
        });
      } else {
        result.quantity += product.quantity;
        await this.usersBasketRepository.update(result.id, result);
      }
    } catch (error) {}
  }

  async basketRemove(id: number) {
    try {
      const reulst = await this.usersBasketRepository.delete({
        id: id,
      });
    } catch (error) {}
  }

  async basketCounter(id: number, quantity: number) {
    try {
      const result = await this.usersBasketRepository.findOne({
        select: [
          'id',
          'userId',
          'product_name',
          'price',
          'quantity',
          'size',
          'color',
          'image',
        ],
        where: {
          id: id,
        },
      });
      if (result) {
        result.quantity = quantity;
        await this.usersBasketRepository.update(result.id, result);
      }
    } catch (error) {}
  }
}
