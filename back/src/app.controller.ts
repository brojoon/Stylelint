import { LocalAuthGuard } from './auth/local-auth.guard';
import { Controller, Post, UseGuards, Request, Get } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { ApiResponse, ApiOperation } from '@nestjs/swagger';
import { AuthService } from './auth/auth.service';
import { JwtAuthGuard } from './auth/jwt-auth.guard';
import { User } from './common/decorators/user.decorator';

@Controller()
export class AppController {
  constructor(private readonly authService: AuthService) {}
}
