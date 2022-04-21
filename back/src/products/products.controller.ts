import {
  Body,
  Controller,
  Get,
  HttpCode,
  Param,
  Post,
  UseGuards,
} from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { JwtAuthGuard } from 'src/auth/guards/jwt-auth.guard';

import { ProductsService } from './products.service';

@ApiTags('PRODUCT')
@Controller('api/product')
export class ProductsController {
  constructor(private productsService: ProductsService) {}

  @ApiOperation({ summary: '모든 상품 정보 가져오기' })
  @ApiResponse({
    status: 200,
    description: '성공',
  })
  @HttpCode(200)
  @Get()
  async getProducts() {
    return this.productsService.productsInfo();
  }

  @UseGuards(JwtAuthGuard)
  @ApiOperation({ summary: '상품 리뷰 작성하기' })
  @ApiResponse({
    status: 200,
    description: '성공',
  })
  @HttpCode(200)
  @Post('review/add')
  async productReviewAdd(@Body() body) {
    return this.productsService.productReviewAdd(body);
  }

  @ApiOperation({ summary: '특정 상품 리뷰 가져오기' })
  @ApiResponse({
    status: 200,
    description: '성공',
  })
  @HttpCode(200)
  @Get(':code/review')
  async getProductReview(@Param('code') code: string) {
    return this.productsService.getProductReview(code);
  }

  @ApiOperation({ summary: '특정 상품 디테일 정보 가져오기' })
  @ApiResponse({
    status: 200,
    description: '성공',
  })
  @HttpCode(200)
  @Get(':code')
  async getProductsDetail(@Param('code') code: string) {
    return this.productsService.productDetaiInfo(code);
  }
}
