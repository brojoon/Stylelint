import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import passport from 'passport';
import cookieParser from 'cookie-parser';
import session from 'express-session';
import { NestExpressApplication } from '@nestjs/platform-express';

declare const module: any;

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);
  const port = process.env.PORT || 3094;

  const config = new DocumentBuilder()
    .setTitle('API')
    .setDescription('개발을 위한 API 문서입니다.')
    .setVersion('1.0')
    .addCookieAuth('connect.sid')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);
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
  console.log(`listening on port ${port}`);

  if (module.hot) {
    module.hot.accept();
    module.hot.dispose(() => app.close());
  }
}
bootstrap();
