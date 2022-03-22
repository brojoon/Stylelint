import { JwtAuthGuard } from './../auth/guards/jwt-auth.guard';
import {
  Body,
  Controller,
  Get,
  HttpCode,
  Post,
  UseGuards,
} from '@nestjs/common';
import { BasketService } from './basket.service';
import { ApiResponse } from '@nestjs/swagger';
import { BasketAddDto } from './dto/basket.add.dto';
import { User } from 'src/common/decorators/user.decorator';

@Controller('api/basket')
export class BasketController {
  constructor(private basketService: BasketService) {}
  @UseGuards(JwtAuthGuard)
  @ApiResponse({
    status: 200,
    description: '성공',
    type: BasketAddDto,
  })
  @HttpCode(200)
  @Get()
  async getBasket(@User() user) {
    return this.basketService.basketInfo(user?.userId);
  }

  @UseGuards(JwtAuthGuard)
  @ApiResponse({
    status: 200,
    description: '성공',
    type: BasketAddDto,
  })
  @HttpCode(200)
  @Post('add')
  async basketAdd(@Body() body: BasketAddDto) {
    return this.basketService.basketAdd(body);
  }

  @UseGuards(JwtAuthGuard)
  @ApiResponse({
    status: 200,
    description: '성공',
  })
  @HttpCode(200)
  @Post('remove')
  async basketRemove(@Body() body: { id: number }) {
    console.log('id', body);
    return this.basketService.basketRemove(body.id);
  }
}
