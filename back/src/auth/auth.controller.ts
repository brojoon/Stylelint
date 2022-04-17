import { Repository } from 'typeorm';
import {
  Body,
  Controller,
  Get,
  HttpCode,
  Post,
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
    const token = await this.authService.login(body);
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
    );
    if (result) {
      return 'ok';
    }
  }
}
