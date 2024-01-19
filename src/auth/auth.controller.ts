import { Controller, Post, Body } from '@nestjs/common';
import { AuthService } from './auth.service';
import { RegisterUserDto, LoginUserDto } from 'src/user/dto/create-user.dto';

@Controller({ version: '1', path: 'auth' })
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('register')
  async register(@Body() createUserDto: RegisterUserDto) {
    return await this.authService.register(createUserDto);
  }

  @Post('login')
  async login(@Body() userDto: LoginUserDto) {
    return await this.authService.login(userDto);
  }
}
