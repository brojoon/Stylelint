import { Basket } from './../entities/basket/basket';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { BasketAddDto } from './dto/basket.add.dto';

@Injectable()
export class BasketService {
  constructor(
    @InjectRepository(Basket)
    private BasketRepository: Repository<Basket>,
  ) {}
  async basketInfo(userId: string) {
    try {
      const result = await this.BasketRepository.find({
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
      const result = await this.BasketRepository.findOne({
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
        this.BasketRepository.save({
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
        await this.BasketRepository.update(result.id, result);
      }
    } catch (error) {}
  }

  async basketRemove(id: number) {
    try {
      const reulst = await this.BasketRepository.delete({
        id: id,
      });
    } catch (error) {}
  }

  async basketCounter(id: number, quantity: number) {
    try {
      const result = await this.BasketRepository.findOne({
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
        await this.BasketRepository.update(result.id, result);
      }
    } catch (error) {}
  }
}
