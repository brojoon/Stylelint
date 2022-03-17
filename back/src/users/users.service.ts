import { Users } from 'src/entities/users/users.info';
import {
  BadRequestException,
  ForbiddenException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Connection, Repository } from 'typeorm';
import bcrypt from 'bcrypt';
import { UserLoginDto } from './dto/user.login.dto';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(Users) private usersRepository: Repository<Users>,
    private connection: Connection,
  ) {}

  async userinfo(userId: string) {
    if (!userId) return null;
    try {
      const result = await this.usersRepository.findOne({
        select: ['userId', 'password', 'address', 'email'],
        where: { userId },
      });
      if (!result) throw new NotFoundException('유저 정보 없음');
      return result;
    } catch (error) {
      if (
        error.errno !== undefined ||
        (error.response.statusCode !== 403 && error.response.statusCode !== 404)
      )
        throw new BadRequestException('내 정보 조회 실패');
      else if (error.response.statusCode === 403)
        throw new ForbiddenException(error.response.message);
      else if (error.response.statusCode === 404)
        throw new NotFoundException(error.response.message);
    }
  }
}
