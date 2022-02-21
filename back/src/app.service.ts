import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'hi';
  }

  postHello(): string {
    return 'Hello World!';
  }
}
