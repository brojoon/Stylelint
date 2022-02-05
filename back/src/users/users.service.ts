import { Injectable } from '@nestjs/common';
import { JoinRequestDto } from './dto/join.request.dto';
@Injectable()
export class UsersService {
  private readonly users = [
    {
      userId: 1,
      username: 'john',
      password: 'changeme',
    },
    {
      userId: 2,
      username: 'maria',
      password: 'guess',
    },
  ];

  async findOne(username: string): Promise<JoinRequestDto | undefined> {
    return this.users.find((user) => user.username === username);
  }
}
