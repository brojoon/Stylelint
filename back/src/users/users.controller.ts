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

  @UseGuards(JwtAuthGuard)
  @HttpCode(200)
  @Post('profile')
  async PostProfile(@Body() Body) {
    return this.usersService.userInfoUpdate(Body);
  }

  @UseGuards(JwtAuthGuard)
  @HttpCode(200)
  @Get('dibs')
  async getDibs(@User() user) {
    return this.usersService.userDibsInfo(user?.userId);
  }

  @UseGuards(JwtAuthGuard)
  @HttpCode(200)
  @Post('dibs/save')
  async DibsSave(@Body() body) {
    return this.usersService.userDibsSave(body.userId, body.product_name);
  }

  @UseGuards(JwtAuthGuard)
  @HttpCode(200)
  @Post('dibs/delete')
  async DibsDelete(@Body() body) {
    return this.usersService.userDibsDelete(body.userId, body.product_name);
  }

  @UseGuards(JwtAuthGuard)
  @HttpCode(200)
  @Get('payment/recent')
  async getRecentPayment(@User() user) {
    return this.usersService.userPaymentRecentInfo(user?.userId);
  }

  @UseGuards(JwtAuthGuard)
  @HttpCode(200)
  @Post('payment/recent')
  async PostRecentPayment(@Body() body) {
    return this.usersService.userPaymentRecentSave(body);
  }

  // @Get('profile/:userId')
  // async getProfile(@Param('userId') userId: string, @Res() res) {
  //   const userInfo = await this.usersService.info(userId);
  //   console.log('userInfo', userInfo);
  //   res.send(userInfo);
  // }\\  @ApiOperation({ summary: '내정보 가져오기' })
}
