import { Body, Controller, Get, HttpCode, Post } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { PaymentService } from './payment.service';

@ApiTags('PAYMENT')
@Controller('api/payment')
export class PaymentController {
  constructor(private paymentService: PaymentService) {}

  @ApiOperation({ summary: '결제전 정보 가져오기' })
  @ApiResponse({
    status: 200,
    description: '성공',
  })
  @HttpCode(200)
  @Get()
  async getPayment() {
    return this.paymentService.PaymentInfo();
  }

  @ApiOperation({ summary: '완료된 결제 정보 가져오기' })
  @ApiResponse({
    status: 200,
    description: '성공',
  })
  @HttpCode(200)
  @Get('/done')
  async getPaymentDone() {
    return this.paymentService.PaymentDoneInfo();
  }

  @ApiOperation({ summary: '결제전 정보 저장' })
  @ApiResponse({
    status: 200,
    description: '성공',
  })
  @HttpCode(200)
  @Post()
  async PaymentSave(@Body() body) {
    return this.paymentService.PaymentInfoSave(body);
  }

  @ApiOperation({ summary: '결제후 정보 저장' })
  @ApiResponse({
    status: 200,
    description: '성공',
  })
  @HttpCode(200)
  @Post()
  asyncPaymentDoneSave(@Body() body) {
    return this.paymentService.PaymentDoneInfoSave();
  }
}
