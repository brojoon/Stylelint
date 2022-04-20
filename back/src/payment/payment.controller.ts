import {
  Body,
  Controller,
  Get,
  HttpCode,
  Post,
  UseGuards,
} from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { JwtAuthGuard } from 'src/auth/guards/jwt-auth.guard';
import { User } from 'src/common/decorators/user.decorator';
import { PaymentService } from './payment.service';

@ApiTags('PAYMENT')
@Controller('api/payment')
@UseGuards(JwtAuthGuard)
export class PaymentController {
  constructor(private paymentService: PaymentService) {}

  @ApiOperation({ summary: '결제전 정보 가져오기' })
  @ApiResponse({
    status: 200,
    description: '성공',
  })
  @HttpCode(200)
  @Get()
  async getPayment(@User() user) {
    return this.paymentService.PaymentInfo(user?.userId);
  }

  @ApiOperation({ summary: '완료된 결제 정보 가져오기' })
  @ApiResponse({
    status: 200,
    description: '성공',
  })
  @HttpCode(200)
  @Get('done')
  async getPaymentDone(@User() user) {
    return this.paymentService.PaymentDoneInfo(user?.userId);
  }

  @ApiOperation({ summary: '결제전 정보 저장' })
  @ApiResponse({
    status: 200,
    description: '성공',
  })
  @HttpCode(200)
  @Post('save')
  async PaymentSave(@Body() body, @User() user) {
    return this.paymentService.PaymentInfoSave(body, user?.userId);
  }

  @ApiOperation({ summary: '결제후 정보 저장' })
  @ApiResponse({
    status: 200,
    description: '성공',
  })
  @HttpCode(200)
  @Post('save/done')
  async PaymentDoneSave(@Body() body, @User() user) {
    return this.paymentService.PaymentDoneUpdate(body, user?.userId);
  }
}
