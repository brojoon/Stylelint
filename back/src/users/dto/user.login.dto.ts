import { PickType } from '@nestjs/swagger';
import { Users } from '../../entities/users/users.info';

export class UserLoginDto extends PickType(Users, [
  'userId',
  'password',
] as const) {
  // @ApiProperty({
  //   example: 1,
  //   description: '유저 아이디',
  //   required: true,
  // })
  // public userId: number;
  // @ApiProperty({ example: 'brojoon', description: '닉네임', required: true })
  // public username: string;
  // @ApiProperty({ example: '123123', description: '비밀번호', required: true })
  // public password: string;
}
