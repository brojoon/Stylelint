import {
  Body,
  Controller,
  Get,
  HttpCode,
  Param,
  Post,
  Res,
  UseGuards,
} from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';
import { LocalAuthGuard } from '../auth/guards/local-auth.guard';
import { User } from '../common/decorators/user.decorator';
import { AuthService } from '../auth/auth.service';
import { JoinRequestDto } from './dto/join.request.dto';
import { UsersService } from './users.service';
import { UserLoginDto } from './dto/user.login.dto';
import { UserInfoDto } from 'src/common/dto/userinfo.dto';
import { BasketAddDto } from './dto/user.basket.add.dto';

@ApiTags('USER')
@Controller('api/user')
export class UsersController {
  constructor(private usersService: UsersService) {}

  @ApiOperation({ summary: '내정보 가져오기' })
  @UseGuards(JwtAuthGuard)
  @ApiResponse({
    status: 200,
    description: '성공',
    type: UserInfoDto,
  })
  @HttpCode(200)
  @Get('profile')
  async getProfile(@User() user) {
    return this.usersService.userinfo(user?.userId);
  }
  // @Get('profile/:userId')
  // async getProfile(@Param('userId') userId: string, @Res() res) {
  //   const userInfo = await this.usersService.info(userId);
  //   console.log('userInfo', userInfo);
  //   res.send(userInfo);
  // }\\  @ApiOperation({ summary: '내정보 가져오기' })
  @UseGuards(JwtAuthGuard)
  @ApiResponse({
    status: 200,
    description: '성공',
    type: UserInfoDto,
  })
  @HttpCode(200)
  @Post('basket/add')
  async basketAdd(@Body() body: BasketAddDto) {
    return this.usersService.basketAdd(body);
  }
}
