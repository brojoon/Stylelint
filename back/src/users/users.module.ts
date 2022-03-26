import { UserPaymentRecent } from './../entities/users/user.payment.recent';
import { UserDips } from './../entities/users/user.dibs.info';
import { Product } from 'src/entities/product/product.info';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthService } from 'src/auth/auth.service';
import { JwtStrategy } from 'src/auth/strategies/jwt.strategy';
import { Users } from 'src/entities/users/users.info';
import { AuthModule } from '../auth/auth.module';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([Users, UserDips, Product, UserPaymentRecent]),
  ],
  controllers: [UsersController],
  providers: [UsersService],
  exports: [UsersService],
})
export class UsersModule {}
