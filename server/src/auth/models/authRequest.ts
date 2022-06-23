import { Request } from 'express';
import { UserDto } from 'src/modules/user/user.dto';

export interface AuthRequest extends Request {
  user: UserDto;
}
