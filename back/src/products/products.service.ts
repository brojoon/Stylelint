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
    @InjectRepository(ProductReview)
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
    const queryRunner = this.connection.createQueryRunner();
    await queryRunner.connect();
    await queryRunner.startTransaction();
    try {
      const product = await queryRunner.manager.getRepository(Product).findOne({
        code: body.product_code,
      });
      if (!product)
        throw new BadRequestException('리뷰 등록 도중 상품 조회 실패!!');

      await queryRunner.manager
        .getRepository(Product)
        .update(
          { code: product?.code },
          { review_count: product?.review_count + 1 },
        );
      const result = await queryRunner.manager
        .getRepository(ProductReview)
        .save(body);
      await queryRunner.commitTransaction();
      return result;
    } catch (error) {
      await queryRunner.rollbackTransaction();
      throw error;
    } finally {
      await queryRunner.release();
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
          'p.review_count',
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
