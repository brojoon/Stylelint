import { Injectable, UnauthorizedException } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';

@Injectable()
export class JwtAuthGuard extends AuthGuard('jwt') {
  // async canActivate(context: ExecutionContext): Promise<boolean> {
  //   const can = await super.canActivate(context);
  //   if (can) {
  //     const request = context.switchToHttp().getRequest();
  //     console.log('login for cookie');
  //     await super.logIn(request);
  //   }
  //   return true;
  // }
  handleRequest<TUser = any>(
    err: any,
    user: any,
    info: any,
    context: any,
    status?: any,
  ): any {
    // console.log('context.args[0]', context.args[0].method);
    // console.log('infoooooooooooo', info);
    // console.log((info + '').includes('Error'));
    if (
      context?.args[0]?.method + '' == 'GET' &&
      (context?.args[0]?.originalUrl == '/api/user/profile' || '/api/user/dibs')
    ) {
      if ((info + '').includes('Error')) return false;
    }
    if ((info + '').includes('Error')) throw new UnauthorizedException();

    return user;
  }
}

// if (context.args[0].originalUrl == '/api/user/profile' || '/api/user/dibs')
// console.log('contextttttttttttttttt', context.args[0].originalUrl);
