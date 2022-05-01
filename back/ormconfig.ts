import { UserPaymentRecent } from './src/entities/users/user.payment.recent';
import { UserDips } from './src/entities/users/user.dibs.info';
import { Payment } from './src/entities/payment/payment';
import { Users } from './src/entities/users/users.info';
import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import dotenv from 'dotenv';

import { Product } from './src/entities/product/product.info';
import { ProductSailInfo } from './src/entities/product/product.sale.info';
import { ProductSubImg } from './src/entities/product/product.sub.img';
import { Basket } from './src/entities/basket/basket';
import { ProductReview } from './src/entities/product/product.review';

// import { ProductSailInfo } from './src/entities/product/product.sale.info';

dotenv.config();
const config: TypeOrmModuleOptions = {
  type: 'mysql',
  // host: 'mysqld',
  // 배포용
  host: 'localhost',
  // 로컬용
  port: +process.env.DB_PORT,
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,

  entities: [
    Users,
    ProductSubImg,
    Product,
    ProductSailInfo,
    Basket,
    Payment,
    UserDips,
    UserPaymentRecent,
    ProductReview,
  ],
  migrations: [__dirname + '/src/migrations/*.ts'],
  cli: { migrationsDir: 'src/migrations' },
  autoLoadEntities: false,
  // charset: 'utf8mb4',
  synchronize: false,
  logging: true,
  keepConnectionAlive: true,
  retryAttempts: 2,
  // dropSchema: true,
};

export = config;
