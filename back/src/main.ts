import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import passport from 'passport';
import cookieParser from 'cookie-parser';
import session from 'express-session';
import { NestExpressApplication } from '@nestjs/platform-express';
import path from 'path';
import { ValidationPipe } from '@nestjs/common';

declare const module: any;

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);
  const port = process.env.PORT || 3095;

  // app.enableCors({
  //   origin: 'http://front:3000',
  //   credentials: true,
  // });
  // //local

  app.enableCors({
    origin: 'http://stylelint.ml',
    credentials: true,
  });
  // 배포용
  app.useGlobalPipes(new ValidationPipe());

  app.useStaticAssets(path.join(__dirname, '..', '/imgs'), {
    prefix: '/imgs',
  });
  // dev 이미지 경로

  // prod 이미지 경로
  // const config = new DocumentBuilder()
  //   .setTitle('API')
  //   .setDescription('개발을 위한 API 문서입니다.')
  //   .setVersion('1.0')  // app.useStaticAssets(path.join(__dirname, '..', '../imgs'), {
  //   prefix: '/imgs',
  // });
  //   .addCookieAuth('connect.sid')
  //   .build();
  // const document = SwaggerModule.createDocument(app, config);
  // SwaggerModule.setup('api', app, document);
  // app.use(cookieParser());
  // app.use(
  //   session({
  //     resave: false,
  //     saveUninitialized: false,
  //     secrete: process.env.COOKIE_SECRET,
  //     cookie: {
  //       httpOnly: true,
  //     },
  //   }),
  // );
  // app.use(passport.initialize());
  // app.use(passport.session);
  await app.listen(port);
  // console.log(`listening on port ${port}`);

  if (module.hot) {
    module.hot.accept();
    module.hot.dispose(() => app.close());
  }
}
bootstrap();
