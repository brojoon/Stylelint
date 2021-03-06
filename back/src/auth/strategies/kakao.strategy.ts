import { PassportStrategy } from '@nestjs/passport';
import { Strategy } from 'passport-kakao';
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { AuthService } from '../auth.service';

@Injectable()
export class KakaoStrategy extends PassportStrategy(Strategy) {
  constructor(private readonly authService: AuthService) {
    super({
      clientID: process.env.KAKAO_CLIENT_ID,
      clientSecret: '', // clientSecret을 사용하지 않는다면 넘기지 말거나 빈 스트링을 넘길 것
      callbackURL: process.env.KAKAO_CALLBACK_URL,
    });
  }

  async validate(
    accessToken: string,
    refreshToken: string,
    profile: any,
  ): Promise<any> {
    const { id } = profile;

    const info = {
      userId: 'kakao_' + id,
      username: profile?.username,
      email: profile?._json.kakao_account?.email,
    };
    if (!info) throw new UnauthorizedException();
    const user = await this.authService.validateUser(
      String(info.userId),
      process.env.PASSWORD,
    );
    if (user) return user;
    const result = await this.authService.join(
      info.userId,
      process.env.PASSWORD,
      '',
      info?.email,
      info?.username,
    );
    if (result) return info;
    else console.log('(google strategy validation 함수에서) result값이 false');
  }
}
