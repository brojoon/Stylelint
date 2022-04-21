import {
  BadRequestException,
  ForbiddenException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Product } from 'src/entities/product/product.info';
import { ProductReview } from 'src/entities/product/product.review';
import { Connection, getRepository, Repository } from 'typeorm';

@Injectable()
export class ProductsService {
  constructor(
    @InjectRepository(Product)
    private productsRepository: Repository<Product>,
    private productsReview: Repository<ProductReview>,
    private connection: Connection,
  ) {}

  async productsInfo() {
    try {
      const ret = await this.productsRepository.find();
      if (!ret) throw new NotFoundException('상품을 찾지 못했습니다');
      return ret;
    } catch (error) {
      if (
        error.errno !== undefined ||
        (error.response.statusCode !== 403 && error.response.statusCode !== 404)
      )
        throw new BadRequestException('상품 정보 조회 실패');
      else if (error.response.statusCode === 403)
        throw new ForbiddenException(error.response.message);
      else if (error.response.statusCode === 404)
        throw new NotFoundException(error.response.message);
    }
  }

  async productReviewAdd(body) {
    try {
      return await this.productsReview.save(body);
    } catch (error) {
      if (
        error.errno !== undefined ||
        (error.response.statusCode !== 403 && error.response.statusCode !== 404)
      )
        throw new BadRequestException(
          '리뷰를 등록하는 도중 에러가 발생했습니다.',
        );
      else if (error.response.statusCode === 403)
        throw new ForbiddenException(error.response.message);
      else if (error.response.statusCode === 404)
        throw new NotFoundException(error.response.message);
    }
  }

  async getProductReview(code) {
    try {
      const ret = await this.productsReview.find({
        where: {
          product_code: code,
        },
      });
      if (!ret) throw new BadRequestException('상품 리뷰 조회 실패');
      return ret;
    } catch (error) {
      if (
        error.errno !== undefined ||
        (error.response.statusCode !== 403 && error.response.statusCode !== 404)
      )
        throw new BadRequestException('상품 리뷰 조회 실패');
      else if (error.response.statusCode === 403)
        throw new ForbiddenException(error.response.message);
      else if (error.response.statusCode === 404)
        throw new NotFoundException(error.response.message);
    }
  }

  async productDetaiInfo(code) {
    try {
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
          'p.image',
          'p.perchase_quantity',
          'sailInfo.color',
          'sailInfo.size',
          'sailInfo.quantity',
          'subImgs.subimage',
        ])
        .getOne();
      if (!ret) throw new BadRequestException('상품 정보 조회 실패');
      return ret;
    } catch (error) {
      if (
        error.errno !== undefined ||
        (error.response.statusCode !== 403 && error.response.statusCode !== 404)
      )
        throw new BadRequestException('상품 정보 조회 실패');
      else if (error.response.statusCode === 403)
        throw new ForbiddenException(error.response.message);
      else if (error.response.statusCode === 404)
        throw new NotFoundException(error.response.message);
    }
  }
}
