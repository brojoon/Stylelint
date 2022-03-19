import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Product } from 'src/entities/product/product.info';
import { Connection, getRepository, Repository } from 'typeorm';

@Injectable()
export class ProductsService {
  constructor(
    @InjectRepository(Product)
    private productsRepository: Repository<Product>,
    private connection: Connection,
  ) {}

  async productsInfo() {
    const ret = await this.productsRepository.find();
    return ret;
  }

  async productDetaiInfo(code) {
    const ret = await getRepository(Product)
      .createQueryBuilder('p')
      .leftJoinAndSelect('p.productSailInfo', 'sailInfo')
      .leftJoinAndSelect('p.productSubImg', 'subImgs')
      .where(`p.code = :code`, { code: code })
      .andWhere(`p.code = subImgs.code`)
      .andWhere(`p.code = sailInfo.code`)
      .select([
        'p.code',
        'p.name',
        'p.type',
        'p.price',
        'p.dibs',
        'p.perchase_quantity',
        'sailInfo.color',
        'sailInfo.size',
        'sailInfo.quantity',
        'subImgs.subimage',
      ])
      .getOne();
    return ret;
  }
}
