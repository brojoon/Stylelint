import { UsersBasket } from './src/entities/users/users.basket';
import { Users } from './src/entities/users/users.info';
import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import dotenv from 'dotenv';

import { Product } from './src/entities/product/product.info';
import { ProductSailInfo } from './src/entities/product/product.sale.info';
import { ProductSubImg } from './src/entities/product/product.sub.img';

// import { ProductSailInfo } from './src/entities/product/product.sale.info';

dotenv.config();
const config: TypeOrmModuleOptions = {
  type: 'mysql',
  host:
    process.env.NODE_ENV === 'production'
      ? process.env.DB_PROD_HOST
      : process.env.DB_DEV_HOST,
  port: +process.env.DB_PORT,
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,

  entities: [Users, ProductSubImg, Product, ProductSailInfo, UsersBasket],
  migrations: [__dirname + '/src/migrations/*.ts'],
  cli: { migrationsDir: 'src/migrations' },
  autoLoadEntities: false,
  charset: 'utf8mb4',
  synchronize: false,
  logging: true,
  keepConnectionAlive: true,
  // dropSchema: true,
};

export = config;
