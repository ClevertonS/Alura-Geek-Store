import { Body, Controller, Get, Post } from '@nestjs/common';
import { UserDto } from './user.dto';
import { UserService } from './user.service';

@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get()
  async findByEmail(username: string) {
    return this.userService.findByEmail(username);
  }

  @Post()
  async createProduct(@Body() data: UserDto) {
    return this.userService.create(data);
  }
}
