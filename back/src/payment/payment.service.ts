import { Basket } from './../entities/basket/basket';
import { Payment } from '../entities/payment/payment';
import {
  BadRequestException,
  ForbiddenException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Connection, Repository, getRepository } from 'typeorm';
import { Product } from 'src/entities/product/product.info';
import { query } from 'express';

@Injectable()
export class PaymentService {
  constructor(
    @InjectRepository(Payment)
    private PaymentRepository: Repository<Payment>,
    @InjectRepository(Basket)
    private BasketRepository: Repository<Basket>,
    private connection: Connection,
  ) {}

  async PaymentInfo(userId) {
    try {
      const result = await this.PaymentRepository.find({
        select: [
          'id',
          'product_name',
          'price',
          'quantity',
          'size',
          'color',
          'basket_number',
          'image',
        ],
        where: {
          userId: userId,
          state: false,
        },
      });
      if (result.length < 1)
        throw new BadRequestException('결제 정보 조회중 에러가 발생했습니다.');
      return result;
    } catch (error) {
      if (
        error.errno !== undefined ||
        (error.response.statusCode !== 403 && error.response.statusCode !== 404)
      )
        throw new BadRequestException('결제 정보 조회중 에러가 발생했습니다.');
      else if (error.response.statusCode === 403)
        throw new ForbiddenException(error.response.message);
      else if (error.response.statusCode === 404)
        throw new NotFoundException(error.response.message);
    }
  }

  async PaymentDoneInfo(userId) {
    try {
      const result = await this.PaymentRepository.find({
        select: [
          'id',
          'product_name',
          'price',
          'quantity',
          'size',
          'color',
          'address',
          'phone_number',
          'receiver',
          'image',
          'createdAt',
        ],
        where: {
          state: true,
          userId: userId,
        },
      });
      if (result.length < 1)
        throw new BadRequestException('결제 정보 조회중 에러가 발생했습니다.');
      return result;
      return result;
    } catch (error) {
      if (
        error.errno !== undefined ||
        (error.response.statusCode !== 403 && error.response.statusCode !== 404)
      )
        throw new BadRequestException('결제 정보 조회중 에러가 발생 했습니다.');
      else if (error.response.statusCode === 403)
        throw new ForbiddenException(error.response.message);
      else if (error.response.statusCode === 404)
        throw new NotFoundException(error.response.message);
    }
  }

  async PaymentInfoSave(data, userId) {
    const queryRunner = this.connection.createQueryRunner();
    await queryRunner.connect();
    await queryRunner.startTransaction();
    try {
      await queryRunner.manager.getRepository(Payment).delete({
        userId: userId,
        state: false,
      });
      await queryRunner.manager.getRepository(Payment).save(data);
      await queryRunner.commitTransaction();
    } catch (error) {
      await queryRunner.rollbackTransaction();
      throw error;
    } finally {
      await queryRunner.release();
    }
  }

  async PaymentDoneUpdate(data, userId) {
    const queryRunner = this.connection.createQueryRunner();
    await queryRunner.connect();
    await queryRunner.startTransaction();
    try {
      const productsInfo = await queryRunner.manager
        .getRepository(Payment)
        .find({
          state: false,
          userId: userId,
        });
      const products = [];

      for (let i = 0; i < productsInfo.length; i++) {
        let isOverlap = false;

        for (let j = 0; j < products?.length; j++) {
          if (productsInfo[i].product_name === products[j].name) {
            isOverlap = true;
            products[j].perchase_quantity += productsInfo[i].quantity;
          }
        }
        if (!isOverlap)
          products.push(
            await queryRunner.manager.getRepository(Product).findOne({
              name: productsInfo[i].product_name,
            }),
          );
      }
      for (let i = 0; i < products.length; i++) {
        await queryRunner.manager.getRepository(Product).update(
          {
            name: products[i].name,
          },
          {
            perchase_quantity:
              products[i].perchase_quantity + productsInfo[i].quantity,
          },
        );
      }

      await queryRunner.manager.getRepository(Payment).update(
        {
          state: false,
          userId: userId,
        },
        {
          state: true,
          address: data.address,
          receiver: data.receiver,
          phone_number: data.phone_number,
          createdAt: new Date(),
        },
      );

      const result = await queryRunner.manager
        .getRepository(Basket)
        .delete(data.basket_numbers);
      await queryRunner.commitTransaction();
      return result;
    } catch (error) {
      await queryRunner.rollbackTransaction();
      throw error;
    } finally {
      await queryRunner.release();
    }
  }
}
