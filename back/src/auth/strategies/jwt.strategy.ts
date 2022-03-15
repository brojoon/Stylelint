import { jwtConstants } from '../constant';
import { Injectable } from '@nestjs/common';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { PassportStrategy } from '@nestjs/passport';
import { JoinRequestDto } from 'src/users/dto/join.request.dto';

const cookieExtractor = function (req) {
  let token = null;
  if (req) token = String(req.headers.cookie);
  return token.substring(10, token.length);
};

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor() {
    super({
      jwtFromRequest: cookieExtractor,
      ignoreExpiration: false,
      secretOrKey: '' + jwtConstants.secret,
    });
  }

  async validate(payload: any) {
    console.log('payload', payload);
    return { userId: payload.userId };
  }
}
