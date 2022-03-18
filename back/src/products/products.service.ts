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
      .where(`p.code = ${code}`)
      .leftJoinAndSelect('p.productSubImgCode', 'subImgs')
      .where('p.code = subImgs.code')
      .select(['p.code', 'p.name', 'p.type', 'subImgs.subimage'])
      .getMany();
    return ret;
  }
}
