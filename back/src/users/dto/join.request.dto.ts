import { ApiProperty, PickType } from '@nestjs/swagger';
import { Users } from '../../entities/users/users.info';

export class JoinRequestDto extends PickType(Users, [
  'userId',
  'password',
  'address',
  'email',
] as const) {
  // @ApiProperty({
  //   example: 1,
  // @ApiProperty({ example:
  //   description: '유저 아이디',
  //   required: true,
  // })
  // public userId: number;
  // @ApiProperty({ example: 'brojoon', description: '닉네임', required: true })
  // public username: string; '123123', description: '비밀번호', required: true })
  // public password: string;
}
