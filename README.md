<h2 align=center > Stylelint 여성 의류 쇼핑몰 👚 </h2>
</br>
<p align=center> 📆 2022.02.4 ~ 2022.05.3</p>
<div align=center>
   <img src="https://img.shields.io/badge/4.5.5-Typescript-3178C6?style=for=flat&logo=TypeScript&logoColor=3178C6">
   <img src="https://img.shields.io/badge/17.0.2-React-61DAFB?style=for=flat&logo=react&logoColor=61DAFB">
   <img src="https://img.shields.io/badge/12.0.8-Next.js-222222?style=flat&logo=Next.js&logoColor=222222"/>
   <img src="https://img.shields.io/badge/7.2.6-Redux-764ABC?style=flat&logo=Redux&logoColor=764ABC"/>
   <img src="https://img.shields.io/badge/8.0.0-NestJS-E0234E?style=for=flat&logo=nestjs&logoColor=E0234E">
   <img src="https://img.shields.io/badge/2.3.3-MySQL-4479A1?style=for=flat&logo=MySQL&logoColor=4479A1">
   <img src="https://img.shields.io/badge/20.1.12-Docker-2496ED?style=for=flat&logo=Docker&logoColor=2496ED">
   <img src="https://img.shields.io/badge/8.7.0-Eslint-4B32C3?style=flat&logo=eslint&logoColor=4B32C3"/>
   <img src="https://img.shields.io/badge/2.5.1-Prettier-F7B93E?style=flat&logo=Prettier&logoColor=F7B93E"/>
   <img src="https://img.shields.io/badge/5.67.0-Webpack-8DD6F9?style=flat&logo=Webpack&logoColor=8DD6F9"/>
   <img src="https://img.shields.io/badge/5.67.0-NGINX-009639?style=flat&logo=NGINX&logoColor=009639"/>

</div>
<h2 align=center>preview</h2>
   <img src="https://user-images.githubusercontent.com/52714837/166839502-62948c96-2cec-4b6a-abcc-f162ea0cc1fc.jpg"/>


## 프로젝트 살펴보기 🔎
### 🙎‍♂️ 팀 구성 
|김형준|
| :---: |
|<img src=https://github.com/brojoon.png width=200 height=200 />|
|[brojoon](https://github.com/brojoon)|
|Front-End, Back-End|
<hr/>

### 🎯 Object
프론트엔드, 백엔드, 배포를 모두 혼자서 진행 해보며 웹개발에 대한 시야를 넓힙니다.

### 

### ⭐️ 주요 기능
 * [x] 장바구니
 * [x] 결제하기
 * [x] 상품 리뷰
 * [x] 배송 조회
 * [x] 회원 정보 변경



### 🗄️ DB구조
![Stylelint-ERD](https://user-images.githubusercontent.com/52714837/166616618-55ce1e57-20df-44d2-88f8-8589825dbf0a.jpg)


### 📜 HTTPS, SSL 적용
![ssl](https://user-images.githubusercontent.com/52714837/166823254-134d4198-3ee9-4a6b-869f-5da8a14d36f7.png)


> #### 📁 프로젝트 구조
``` ts
📦Stylelint
 ┣ 📂back
 ┃ ┣ 📂imgs
 ┃ ┣ 📂src
 ┃ ┃ ┣ 📂auth
 ┃ ┃ ┃ ┣ 📂guards
 ┃ ┃ ┃ ┣ 📂strategies
 ┃ ┃ ┃ ┣ 📜auth.controller.ts
 ┃ ┃ ┃ ┣ 📜auth.module.ts
 ┃ ┃ ┃ ┣ 📜auth.service.spec.ts
 ┃ ┃ ┃ ┣ 📜auth.service.ts
 ┃ ┃ ┃ ┗ 📜constants.ts
 ┃ ┃ ┣ 📂basket
 ┃ ┃ ┣ 📂common
 ┃ ┃ ┣ 📂database
 ┃ ┃ ┣ 📂entities
 ┃ ┃ ┣ 📂middlewares
 ┃ ┃ ┣ 📂payment
 ┃ ┃ ┣ 📂products
 ┃ ┃ ┣ 📂users
 ┃ ┃ ┣ 📜app.controller.ts
 ┃ ┃ ┣ 📜app.module.ts
 ┃ ┃ ┣ 📜app.service.ts
 ┃ ┃ ┗ 📜main.ts
 ┃ ┣ 📜docker-entrypoint.sh
 ┃ ┣ 📜Dockerfile
 ┃ ┣ 📜http-exception.filter.ts
 ┃ ┣ 📜nest-cli.json
 ┃ ┣ 📜ormconfig.ts
 ┃ ┣ 📜user.info.ts
 ┣ 📂front
 ┃ ┣ 📂pages
 ┃ ┣ 📂public
 ┃ ┣ 📂src
 ┃ ┃ ┣ 📂components
 ┃ ┃ ┣ 📂store
 ┃ ┃ ┣ 📂typings
 ┃ ┃ ┗ 📂utils
 ┃ ┣ 📂styles
 ┃ ┣ 📜.eslintrc.json
 ┃ ┣ 📜Dockerfile
 ┃ ┣ 📜init.sh
 ┣ 📂nginx
 ┃ ┣ 📂conf.d
 ┃ ┣ 📜Dockerfile
 ┃ ┗ 📜init.sh
 ┣ 📜.gitignore
 ┣ 📜db.sql
 ┣ 📜docker-compose.yml
```
