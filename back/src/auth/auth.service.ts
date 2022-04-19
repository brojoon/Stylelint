import { ForbiddenException, Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { InjectRepository } from '@nestjs/typeorm';
import { Users } from 'src/entities/users/users.info';
import { Connection, Repository } from 'typeorm';
import bcrypt from 'bcrypt';
import { UserLoginDto } from 'src/users/dto/user.login.dto';

@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(Users) private usersRepository: Repository<Users>,
    private readonly jwtService: JwtService,
    private connection: Connection,
  ) {}

  async validateUser(userId: string, password: string): Promise<any> {
    const user = await this.usersRepository.findOne({
      where: { userId },
      select: ['userId', 'password'],
    });

    if (!user) {
      return null;
    }
    const result = await bcrypt.compare(password, user.password);
    if (result) {
      const { password, ...userWithoutPassword } = user;
      return userWithoutPassword;
    }
    return null;
  }

  async login(user: any) {
    console.log('userrrrrrrrrrrrrrrrrrrrr: ', user);
    const payload = { userId: user.userId };
    return {
      access_token: this.jwtService.sign(payload),
    };
  }

  async join(userId: string, password: string, address: string, email: string) {
    const queryRunner = this.connection.createQueryRunner();
    await queryRunner.connect();
    await queryRunner.startTransaction();
    const user = await queryRunner.manager
      .getRepository(Users)
      .findOne({ where: { userId } });
    if (user) {
      throw new ForbiddenException('이미 존재하는 사용자입니다');
    }
    const hashedPassword = await bcrypt.hash(password, 12);
    try {
      const returned = await queryRunner.manager.getRepository(Users).save({
        userId,
        password: hashedPassword,
        address,
        email,
      });
      await queryRunner.commitTransaction();
      return true;
    } catch (error) {
      await queryRunner.rollbackTransaction();
      throw error;
    } finally {
      await queryRunner.release();
    }
  }
}
