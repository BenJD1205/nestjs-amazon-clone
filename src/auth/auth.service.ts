import { Injectable } from '@nestjs/common';
import { UserService } from 'src/user/user.service';

@Injectable()
export class AuthService {
  constructor(private readonly userService: UserService) {}

  async validateUser(email: string, pass: string): Promise<any> {
    const user = await this.userService.findByCondition({ email: email });
    if (user) {
      const isValid = this.userService.isValidPassword(pass, user.password);
      return isValid && user;
    }
    return null;
  }

  async register(userDto) {
    return await this.userService.create(userDto);
  }

  async login(userDto) {
    return await this.userService.create(userDto);
  }
}
