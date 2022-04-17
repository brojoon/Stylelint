import { Basket } from './../entities/basket/basket';
import {
  BadRequestException,
  ForbiddenException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
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
    } catch (error) {
      if (
        error.errno !== undefined ||
        (error.response.statusCode !== 403 && error.response.statusCode !== 404)
      )
        throw new BadRequestException(
          '장바구니 조회 도중 에러가 발생 했습니다.',
        );
      else if (error.response.statusCode === 403)
        throw new ForbiddenException(error.response.message);
      else if (error.response.statusCode === 404)
        throw new NotFoundException(error.response.message);
    }
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
    } catch (error) {
      if (
        error.errno !== undefined ||
        (error.response.statusCode !== 403 && error.response.statusCode !== 404)
      )
        throw new BadRequestException(
          '장바구니에 담는 도중 에러가 발생 했습니다.',
        );
      else if (error.response.statusCode === 403)
        throw new ForbiddenException(error.response.message);
      else if (error.response.statusCode === 404)
        throw new NotFoundException(error.response.message);
    }
  }

  async basketRemove(data) {
    try {
      return await this.BasketRepository.delete(data);
    } catch (error) {
      if (
        error.errno !== undefined ||
        (error.response.statusCode !== 403 && error.response.statusCode !== 404)
      )
        throw new BadRequestException('상품 제거 실패');
      else if (error.response.statusCode === 403)
        throw new ForbiddenException(error.response.message);
      else if (error.response.statusCode === 404)
        throw new NotFoundException(error.response.message);
    }
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
        return await this.BasketRepository.update(result.id, result);
      }
      throw new NotFoundException('상품을 찾지 못했습니다.');
    } catch (error) {
      if (
        error.errno !== undefined ||
        (error.response.statusCode !== 403 && error.response.statusCode !== 404)
      )
        throw new BadRequestException('수량 변경 실패');
      else if (error.response.statusCode === 403)
        throw new ForbiddenException(error.response.message);
      else if (error.response.statusCode === 404)
        throw new NotFoundException(error.response.message);
    }
  }
}
