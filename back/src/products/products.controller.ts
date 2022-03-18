import { Controller, Get, HttpCode, Param } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';

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
