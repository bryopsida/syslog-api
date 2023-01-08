import { Controller, Request, Post, UseGuards, Get } from '@nestjs/common';
import { LocalAuthGuard } from '../guards/local-auth.guard';
import { AuthenticationService } from '../authentication.service';
import { JwtAuthGuard } from '../guards/jwt-auth.guard';

@Controller()
export class LoginController {
  constructor(private authService: AuthenticationService) {}
  @UseGuards(LocalAuthGuard)
  @Post('auth/login')
  async login(@Request() req) {
    return this.authService.login(req.user);
  }

  @UseGuards(JwtAuthGuard)
  @Get('profile')
  getProfile(@Request() req) {
    return req.user;
  }
}
