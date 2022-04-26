import { Repository } from 'typeorm';
import {
  Body,
  Controller,
  Get,
  HttpCode,
  Post,
  Req,
  Res,
  UseGuards,
  UseInterceptors,
} from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { undefinedToNullIntercepter } from 'src/common/interceptors/undefinedToNull.interceptor';
import { InjectRepository } from '@nestjs/typeorm';
import { Users } from 'src/entities/users/users.info';
import { AuthService } from './auth.service';
import { LocalAuthGuard } from './guards/local-auth.guard';
import { User } from 'src/common/decorators/user.decorator';
import { UserLoginDto } from 'src/users/dto/user.login.dto';
import { JoinRequestDto } from 'src/users/dto/join.request.dto';
import { AuthGuard } from '@nestjs/passport';
import { jwtConstants } from './constants';

@ApiTags('AUTH')
@UseInterceptors(undefinedToNullIntercepter)
@Controller('api/auth')
export class AuthController {
  constructor(
    @InjectRepository(Users) private usersRepository: Repository<Users>,
    private readonly authService: AuthService,
  ) {}

  @ApiOperation({ summary: '로그인' })
  @UseGuards(LocalAuthGuard)
  @Post('login')
  async login(@Body() body: UserLoginDto, @Res() res) {
    res.clearCookie('stylelint');
    const token = await this.authService.login(body.userId);
    res.cookie('stylelint', token.access_token, { httpOnly: true });
    res.send(token.access_token);
  }

  @ApiOperation({ summary: '로그아웃' })
  @ApiResponse({
    status: 200,
    description: '"로그아웃 성공시": [return value: null]',
  })
  @HttpCode(200)
  @Get('logout')
  logout(@Res() res) {
    res.clearCookie('stylelint');
    res.send(null);
  }

  @ApiOperation({ summary: '회원가입' })
  @Post('signup')
  async join(@Body() body: JoinRequestDto) {
    const result = await this.authService.join(
      body.userId,
      body.password,
      body.address,
      body.email,
      body.userId,
    );
    if (result) {
      return 'ok';
    }
  }

  @UseGuards(AuthGuard('google'))
  @Get('google')
  async googleAuthor() {}

  @UseGuards(AuthGuard('google'))
  @Get('google/redirect')
  async googleRedirect(@Req() req, @Res() res) {
    res.clearCookie('stylelint');
    const token = await this.authService.login(req.user.userId);
    res.cookie('stylelint', token.access_token, { httpOnly: true });
    res.status(302).redirect(jwtConstants.HOME);
  }

  @UseGuards(AuthGuard('kakao'))
  @Get('kakao')
  async kakaoAuthor() {}

  @UseGuards(AuthGuard('kakao'))
  @Get('kakao/redirect')
  async kakaoRedirect(@Req() req, @Res() res) {
    res.clearCookie('stylelint');

    const token = await this.authService.login(req.user.userId);
    res.cookie('stylelint', token.access_token, { httpOnly: true });
    res.status(302).redirect(jwtConstants.HOME);
  }
}
