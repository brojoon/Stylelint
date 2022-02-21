import { ApiProperty, PickType } from '@nestjs/swagger';
import { Users } from '../../entities/UsersInformaiton/Users';

export class JoinRequestDto extends PickType(Users, [
  'userId',
  'userName',
  'password',
  'zender',
  'address',
  'phoneNumber',
  'email',
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
