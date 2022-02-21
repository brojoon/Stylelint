import { JoinRequestDto } from './../../users/dto/join.request.dto';
import { ApiProperty } from '@nestjs/swagger';

export class UserDto extends JoinRequestDto {
  @ApiProperty({ required: true, example: 1, description: '아이디' })
  public id: number;
}
