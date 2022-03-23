import { Payment } from '../entities/payment/payment';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class PaymentService {
  constructor(
    @InjectRepository(Payment)
    private PaymentRepository: Repository<Payment>,
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
          'image',
        ],
        where: {
          state: false,
        },
      });
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
          'image',
        ],
        where: {
          state: true,
        },
      });
    } catch (error) {}
  }

  async PaymentInfoSave(data) {
    try {
      this.PaymentRepository.delete({
        state: false,
      });
      this.PaymentRepository.save(data);
    } catch (error) {}
  }

  async PaymentDoneInfoSave() {
    try {
      this.PaymentRepository.update(
        {
          state: false,
        },
        { state: true },
      );
    } catch (error) {}
  }
}
