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

  async basketAdd(product: BasketAddDto[]) {
    try {
      for (let i = 0; i < product.length; i++) {
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
            userId: product[i].userId,
            product_name: product[i].product_name,
            size: product[i].size,
            color: product[i].color,
          },
        });
        if (!result) {
          await this.BasketRepository.save({
            userId: product[i].userId,
            product_name: product[i].product_name,
            price: product[i].price,
            quantity: product[i].quantity,
            size: product[i].size,
            color: product[i].color,
            image: product[i].image,
          });
        } else {
          result.quantity += product[i].quantity;
          await this.BasketRepository.update(result.id, result);
        }
      }
    } catch (error) {}
  }

  async basketRemove(data) {
    try {
      const reulst = await this.BasketRepository.delete(data);
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
