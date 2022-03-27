import { Basket } from './../entities/basket/basket';
import { Payment } from '../entities/payment/payment';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class PaymentService {
  constructor(
    @InjectRepository(Payment)
    private PaymentRepository: Repository<Payment>,
    @InjectRepository(Basket)
    private BasketRepository: Repository<Basket>,
  ) {}

  async PaymentInfo() {
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
          state: false,
        },
      });
      return result;
    } catch (error) {}
  }

  async PaymentDoneInfo() {
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
          'image',
        ],
        where: {
          state: true,
        },
      });
      return result;
    } catch (error) {}
  }

  async PaymentInfoSave(data) {
    try {
      await this.PaymentRepository.delete({
        state: false,
      });
      await this.PaymentRepository.save(data);
    } catch (error) {}
  }

  async PaymentDoneUpdate(data) {
    try {
      await this.PaymentRepository.update(
        {
          state: false,
        },
        {
          state: true,
          address: data.address,
          receiver: data.receiver,
          phone_number: data.phone_number,
        },
      );
      const result = await this.BasketRepository.delete(data.basket_numbers);
      return result;
    } catch (error) {}
  }
}
