import {
  Body,
  Controller,
  Get,
  Param,
  Post,
  Res,
  UseGuards,
} from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';
import { LocalAuthGuard } from '../auth/guards/local-auth.guard';
import { User } from '../common/decorators/user.decorator';
import { AuthService } from '../auth/auth.service';
import { JoinRequestDto } from './dto/join.request.dto';
import { UsersService } from './users.service';
import { UserLoginDto } from './dto/user.login.dto';

@ApiTags('USER')
@Controller('api/users')
export class UsersController {
  constructor(private usersService: UsersService) {}

  @ApiOperation({ summary: '유저 정보 가져오기' })
  @UseGuards(JwtAuthGuard)
  @Get('profile/:userId')
  async getProfile(@Param('userId') userId: string, @Res() res) {
    const userInfo = await this.usersService.info(userId);
    console.log('userInfo', userInfo);
    res.send(userInfo);
  }
}
