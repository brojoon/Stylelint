import { Controller } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { ProductsService } from './products.service';

@ApiTags('PRODUCT')
@Controller('products')
export class ProductsController {
  constructor(private productsService: ProductsService) {}
}
