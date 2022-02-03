import { Controller, Get, Post } from '@nestjs/common';
import { ApiResponse, ApiOperation } from '@nestjs/swagger';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @ApiResponse({
    status: 201,
    description: '성공',
  })
  @ApiResponse({
    status: 510,
    description: '서버에러',
  })
  @ApiOperation({ summary: 'test' })
  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Post('hi')
  postHello(): string {
    return this.appService.postHello();
  }
}
