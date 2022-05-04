<h2 align=center > Stylelint 여성 의류 쇼핑몰 👚 </h2>
</br>
<div align=center>
   <img src="https://img.shields.io/badge/4.4.3-Typescript-3178C6?style=for=flat&logo=TypeScript&logoColor=3178C6">
   <img src="https://img.shields.io/badge/17.0.2-React-61DAFB?style=for=flat&logo=react&logoColor=61DAFB">
   <img src="https://img.shields.io/badge/8.0.0-NestJS-E0234E?style=for=flat&logo=nestjs&logoColor=E0234E">
   <img src="https://img.shields.io/badge/13.4-PostgreSQL-4169E1?style=for=flat&logo=PostgreSQL&logoColor=4169E1">
   <img src="https://img.shields.io/badge/20.1.12-Docker-2496ED?style=for=flat&logo=Docker&logoColor=2496ED">
   <img src="https://img.shields.io/badge/5.0.3-Material UI-757575?style=flat&logo=Material Design&logoColor=FFF"/>
   <img src="https://img.shields.io/badge/7.32.0-Eslint-4B32C3?style=flat&logo=eslint&logoColor=4B32C3"/>
   <img src="https://img.shields.io/badge/2.4.1-Prettier-F7B93E?style=flat&logo=Prettier&logoColor=F7B93E"/>
   <img src="https://img.shields.io/badge/5.3.0-React router dom-CA4245?style=flat&logo=react router&logoColor=CA4245"/>
   <img src="https://img.shields.io/badge/5.28.0-Webpack-8DD6F9?style=flat&logo=webpack&logoColor=8DD6F9"/>
   <img src="https://img.shields.io/badge/5.1.1-Swagger-85EA2D?style=for=flat&logo=Swagger&logoColor=85EA2D">
   <img src="https://img.shields.io/badge/8.1.2-Socket.io-333333?style=for=flat&logo=Socket.io&logoColor=333333">
</div>

<p align=center> 📆 2022.02.4 ~ 2022.05.3</p>


<h2 align=center>preview</h2>

## 프로젝트 살펴보기 🔎


<br>
<hr/>


### 🚀 서비스 소개

> #### 📁 프로젝트 구조
``` ts
📦Stylelint
 ┣ 📂back
 ┃ ┣ 📂imgs
 ┃ ┣ 📂src
 ┃ ┃ ┣ 📂auth
 ┃ ┃ ┃ ┣ 📂guards
 ┃ ┃ ┃ ┃ ┣ 📜jwt-auth.guard.ts
 ┃ ┃ ┃ ┃ ┗ 📜local-auth.guard.ts
 ┃ ┃ ┃ ┣ 📂strategies
 ┃ ┃ ┃ ┃ ┣ 📜google.strategy.ts
 ┃ ┃ ┃ ┃ ┣ 📜jwt.strategy.ts
 ┃ ┃ ┃ ┃ ┣ 📜kakao.strategy.ts
 ┃ ┃ ┃ ┃ ┗ 📜local.strategy.ts
 ┃ ┃ ┃ ┣ 📜auth.controller.ts
 ┃ ┃ ┃ ┣ 📜auth.module.ts
 ┃ ┃ ┃ ┣ 📜auth.service.spec.ts
 ┃ ┃ ┃ ┣ 📜auth.service.ts
 ┃ ┃ ┃ ┗ 📜constants.ts
 ┃ ┃ ┣ 📂basket
 ┃ ┃ ┣ 📂common
 ┃ ┃ ┃ ┣ 📂decorators
 ┃ ┃ ┃ ┃ ┣ 📜token.decorator.ts
 ┃ ┃ ┃ ┃ ┗ 📜user.decorator.ts
 ┃ ┃ ┃ ┣ 📂dto
 ┃ ┃ ┃ ┃ ┗ 📜userinfo.dto.ts
 ┃ ┃ ┃ ┗ 📂interceptors
 ┃ ┃ ┃ ┃ ┗ 📜undefinedToNull.interceptor.ts
 ┃ ┃ ┣ 📂database
 ┃ ┃ ┣ 📂entities
 ┃ ┃ ┣ 📂middlewares
 ┃ ┃ ┃ ┗ 📜logger.middleware.ts
 ┃ ┃ ┣ 📂payment
 ┃ ┃ ┣ 📂products
 ┃ ┃ ┣ 📂users
 ┃ ┃ ┣ 📜app.controller.spec.ts
 ┃ ┃ ┣ 📜app.controller.ts
 ┃ ┃ ┣ 📜app.module.ts
 ┃ ┃ ┣ 📜app.service.ts
 ┃ ┃ ┗ 📜main.ts
 ┃ ┣ 📂test
 ┃ ┣ 📜.dockerignore
 ┃ ┣ 📜.env
 ┃ ┣ 📜.env.development
 ┃ ┣ 📜.env.production
 ┃ ┣ 📜.eslintrc.js
 ┃ ┣ 📜.prettierrc
 ┃ ┣ 📜docker-entrypoint.sh
 ┃ ┣ 📜Dockerfile
 ┃ ┣ 📜http-exception.filter.ts
 ┃ ┣ 📜nest-cli.json
 ┃ ┣ 📜ormconfig.ts
 ┃ ┣ 📜package-lock.json
 ┃ ┣ 📜package.json
 ┃ ┣ 📜README.md
 ┃ ┣ 📜tsconfig.build.json
 ┃ ┣ 📜tsconfig.json
 ┃ ┣ 📜user.info.ts
 ┃ ┗ 📜webpack-hmr.config.js
 ┣ 📂front
 ┃ ┣ 📂pages
 ┃ ┃ ┣ 📜index.tsx
 ┃ ┃ ┣ 📜_app.tsx
 ┃ ┃ ┗ 📜_documents.tsx
 ┃ ┣ 📂public
 ┃ ┃ ┣ 📂img
 ┃ ┃ ┣ 📜favicon.ico
 ┃ ┃ ┣ 📜style.ts
 ┃ ┃ ┗ 📜vercel.svg
 ┃ ┣ 📂src
 ┃ ┃ ┣ 📂components
 ┃ ┃ ┣ 📂store
 ┃ ┃ ┃ ┣ 📂modules
 ┃ ┃ ┃ ┗ 📜index.ts
 ┃ ┃ ┣ 📂typings
 ┃ ┃ ┗ 📂utils
 ┃ ┣ 📂styles
 ┃ ┃ ┣ 📂page
 ┃ ┃ ┣ 📜globals.css
 ┃ ┃ ┗ 📜Home.module.css
 ┃ ┣ 📜.babelrc
 ┃ ┣ 📜.dockerignore
 ┃ ┣ 📜.eslintrc.json
 ┃ ┣ 📜.prettierrc
 ┃ ┣ 📜Dockerfile
 ┃ ┣ 📜init.sh
 ┃ ┣ 📜next-env.d.ts
 ┃ ┣ 📜next.config.js
 ┃ ┣ 📜package-lock.json
 ┃ ┣ 📜package.json
 ┃ ┣ 📜postcss.config.js
 ┃ ┣ 📜README.md
 ┃ ┣ 📜tailwind.config.js
 ┃ ┣ 📜tsconfig.json
 ┃ ┣ 📜tsconfig.tsbuildinfo
 ┃ ┗ 📜yarn.lock
 ┣ 📂nginx
 ┃ ┣ 📂conf.d
 ┃ ┣ 📂log
 ┃ ┃ ┣ 📜access.log
 ┃ ┃ ┗ 📜error.log
 ┃ ┣ 📜Dockerfile
 ┃ ┗ 📜init.sh
 ┣ 📂www
 ┣ 📜.env
 ┣ 📜.gitignore
 ┣ 📜db.sql
 ┣ 📜docker-compose.yml
 ┗ 📜README.md
```
