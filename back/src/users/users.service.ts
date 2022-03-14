import {
  ForbiddenException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Connection, Repository } from 'typeorm';
import bcrypt from 'bcrypt';
import { Users } from 'src/entities/UsersInformaiton/Users';
import { UserLoginDto } from './dto/user.login.dto';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(Users) private usersRepository: Repository<Users>,
    private connection: Connection,
  ) {}

  async info(userId: string) {
    const result = await this.usersRepository.findOne({
      select: ['userId', 'password', 'address', 'email'],
      where: { userId },
    });
    if (!result) throw new NotFoundException('유저 정보 없음');
    return result;
  }
}
