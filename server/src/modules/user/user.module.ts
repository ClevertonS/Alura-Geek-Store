import { Module } from '@nestjs/common';
import { JwtStrategy } from 'src/auth/strategies/jwt.strategy';

import { PrismaService } from 'src/databases/prisma.service';
import { UserController } from './user.controller';
import { UserService } from './user.service';

@Module({
  imports: [PrismaService],
  controllers: [UserController],
  providers: [UserService, PrismaService, JwtStrategy],
  exports: [UserService],
})
export class UserModule {}
