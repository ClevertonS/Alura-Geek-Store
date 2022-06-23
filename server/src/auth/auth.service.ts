import { Injectable } from '@nestjs/common';
import { UserService } from 'src/modules/user/user.service';
import * as bcrypt from 'bcrypt';
import { UserDto } from 'src/modules/user/user.dto';
import { UserPayload } from './models/userPayload';
import { JwtService } from '@nestjs/jwt';
import { UserToken } from './models/userToken';

@Injectable()
export class AuthService {
  constructor(
    private readonly userService: UserService,
    private readonly jwtService: JwtService,
  ) {}

  login(user: UserDto): UserToken {
    const payload: UserPayload = {
      sub: user.id,
      username: user.username,
    };

    const jwtToken = this.jwtService.sign(payload);

    return {
      acess_token: jwtToken,
    };
  }

  async validateUser(username: string, password: string) {
    const user = await this.userService.findByEmail(username);

    if (user) {
      const isPasswordValid = await bcrypt.compare(password, user.password);

      if (isPasswordValid) {
        return {
          ...user,
          password: undefined,
        };
      }
    }
    throw new Error('Email e/ou senha estão incorretos.');
  }
}
