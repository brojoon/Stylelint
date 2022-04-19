import { PassportStrategy } from '@nestjs/passport';
import { Strategy, VerifyCallback } from 'passport-google-oauth20';
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { AuthService } from '../auth.service';
import { jwtConstants } from '../constants';

@Injectable()
export class GoogleStrategy extends PassportStrategy(Strategy) {
  constructor(private readonly authService: AuthService) {
    super({
      clientID: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_SECRET,
      callbackURL: process.env.GOOGLE_CALLBACK_URL,

      scope: ['email', 'profile'], //구글설정에서는 scope 따로 정해주지 않긴한데..
    });
  }

  async validate(
    accessToken: string,
    refreshToken: string,
    profile: any,
    done: VerifyCallback,
  ): Promise<any> {
    const { id } = profile;

    const info = {
      oauthId: id,
      username: profile?.name?.givenName,
      email: profile?.emails[0]?.value,
    };
    if (!info) throw new UnauthorizedException();
    const user = await this.authService.validateUser(
      String(info.oauthId),
      process.env.PASSWORD,
    );
    if (user) return user;
    const result = await this.authService.join(
      info.oauthId,
      process.env.PASSWORD,
      '',
      info.email,
    );
    if (result) return info;
    else console.log('(google strategy validation 함수에서) result값이 false');
  }
}
