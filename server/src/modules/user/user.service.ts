import { Injectable } from '@nestjs/common';
import { Prisma, Users } from '@prisma/client';
import { PrismaService } from 'src/databases/prisma.service';
import { UserDto } from './user.dto';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UserService {
  constructor(private prisma: PrismaService) {}

  findByEmail(username: string) {
    return this.prisma.users.findUnique({
      where: {
        username,
      },
    });
  }

  async create(UserDto: UserDto): Promise<Users> {
    const data: Prisma.UsersCreateInput = {
      ...UserDto,
      password: await bcrypt.hash(UserDto.password, 10),
    };
    const createUser = await this.prisma.users.create({
      data,
    });
    return { ...createUser, password: undefined };
  }
}
