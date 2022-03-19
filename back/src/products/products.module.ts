import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from '@nestjs/common';
import { ProductsService } from './products.service';
import { ProductsController } from './products.controller';
import { Product } from 'src/entities/product/product.info';
import { ProductSubImg } from 'src/entities/product/product.sub.img';
import { ProductSailInfo } from 'src/entities/product/product.sale.info';

@Module({
  imports: [
    TypeOrmModule.forFeature([Product, ProductSubImg, ProductSailInfo]),
  ],
  providers: [ProductsService],
  controllers: [ProductsController],
  exports: [ProductsService],
})
export class ProductsModule {}
