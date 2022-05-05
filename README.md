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
<div align=center>
   <a href="http://42transcendence.ml">
   <img src="https://user-images.githubusercontent.com/52714837/166839502-62948c96-2cec-4b6a-abcc-f162ea0cc1fc.jpg"/>
   </a>
   <a href="https://stylelint.ml">
      이미지 클릭시 배포된 사이트로 이동
   </a>
 </div>

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
 * [x] 찜하기
 * [x] 장바구니
 * [x] 결제하기
 * [x] 상품 리뷰
 * [x] 배송 조회
 * [x] 회원 정보 수정


### 📜 HTTPS, SSL 적용
![ssl](https://user-images.githubusercontent.com/52714837/166823254-134d4198-3ee9-4a6b-869f-5da8a14d36f7.png)

### 🗄️ DB구조
![Stylelint-ERD](https://user-images.githubusercontent.com/52714837/166616618-55ce1e57-20df-44d2-88f8-8589825dbf0a.jpg)


> #### 📁 프로젝트 구조
``` ts
📦Stylelint
 ┣ 📂back
 ┃ ┣ 📂imgs
 ┃ ┣ 📂src
 ┃ ┃ ┣ 📂auth                       // guards, oauth, jwt strategy auth 관련 모음
 ┃ ┃ ┣ 📂basket                     // basket 모듈, 컨트롤러, 서비스
 ┃ ┃ ┣ 📂common                     // 공통 dto, 데코레이터, 인터셉터 모음
 ┃ ┃ ┣ 📂database                   // 초기 더미데이터 seed
 ┃ ┃ ┣ 📂entities                   // 테이블 구조 엔티티
 ┃ ┃ ┣ 📂middlewares                // 서버 로그용 미들웨어
 ┃ ┃ ┣ 📂payment                    // payment 모듈, 컨트롤러, 서비스
 ┃ ┃ ┣ 📂products                   // product 모듈, 컨트롤러, 서비스
 ┃ ┃ ┣ 📂users                      // users 모듈, 컨트롤러, 서비스
 ┃ ┃ ┣ 📜app.controller.ts
 ┃ ┃ ┣ 📜app.module.ts
 ┃ ┃ ┣ 📜app.service.ts
 ┃ ┃ ┗ 📜main.ts
 ┃ ┣ 📜docker-entrypoint.sh         // 도커파일 실행후 실행되는 스크립트
 ┃ ┣ 📜Dockerfile                   // 배포 자동화 도커파일
 ┃ ┣ 📜http-exception.filter.ts
 ┃ ┣ 📜ormconfig.ts
 ┣ 📂front
 ┃ ┣ 📂pages                        // 사이트 페이지 컴포넌트
 ┃ ┣ 📂public                       // 사이트 이미지 모음
 ┃ ┣ 📂src
 ┃ ┃ ┣ 📂components                 // 재사용 가능한 컴포넌트 모음
 ┃ ┃ ┣ 📂store                      // redux-toolkit 스토어, 모듈모음
 ┃ ┃ ┣ 📂typings                    // db 데이터 type 모음
 ┃ ┃ ┗ 📂utils                      // 공통 hooks, util 모음
 ┃ ┣ 📂styles                       // 전역 css, 페이지 css 모음
 ┃ ┣ 📜Dockerfile                   // 배포 자동화 도커파일
 ┃ ┣ 📜init.sh                      // 도커파일 실행후 실행되는 스크립트, nginx 설정 관련
 ┣ 📂nginx                             
 ┃ ┣ 📂conf.d                       // nginx 설정 파일
 ┃ ┣ 📜Dockerfile                   // nginx 도커 파일
 ┃ ┗ 📜init.sh                      // 도커파일 빌드후 실행되는 스크립트
 ┣ 📜db.sql                         // MySQL dump 파일
 ┣ 📜docker-compose.yml             // 배포 자동화 도커 컴포우즈 파일
```
