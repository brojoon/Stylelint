import { Controller, Get, Post, UseGuards } from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { LocalAuthGuard } from '../auth/local-auth.guard';
import { User } from '../common/decorators/user.decorator';
import { AuthService } from '../auth/auth.service';

@ApiTags('USER')
@Controller('api/users')
export class UsersController {
  constructor(private authService: AuthService) {}
  @ApiOperation({ summary: '로그인' })
  @UseGuards(LocalAuthGuard)
  @Post('login')
  async login(@User() user) {
    return this.authService.login(user);
  }

  @ApiOperation({ summary: '프로필' })
  @UseGuards(JwtAuthGuard)
  @Get('profile')
  getProfile(@User() user) {
    return user;
  }
}
