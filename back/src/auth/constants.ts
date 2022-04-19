export const jwtConstants = {
  secret: process.env.SECRET,
  expirationTime: process.env.EXPIRATIONTIME,

  KAKAO_CLIENT_ID: process.env.KAKAO_CLIENT_ID,
  KAKAO_SECRET: '',
  KAKAO_CALLBACK_URL: process.env.KAKAO_CALLBACK_URL,
  HOME: 'http://localhost:3000',
};
