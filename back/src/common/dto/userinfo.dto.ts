import { ApiProperty, PickType } from '@nestjs/swagger';
import { Users } from 'src/entities/users/users.info';

export class UserInfoDto extends PickType(Users, [
  'userId',
  'address',
  'email',
] as const) {}
