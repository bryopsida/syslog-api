import { Module } from '@nestjs/common';
import { AuthenticationService } from './authentication.service';
import { UsersModule } from 'src/users/users.module';
import { LocalStrategy } from './strategies/local.strategy';
import { PassportModule } from '@nestjs/passport';
import { LoginController } from './controllers/login.controller';
import { LocalAuthGuard } from './guards/local-auth.guard';
import { JwtModule } from '@nestjs/jwt';
import { jwtConstants } from './constant';
import { JwtStrategy } from './strategies/jwt.strategy';
import { JwtAuthGuard } from './guards/jwt-auth.guard';

@Module({
  controllers: [LoginController],
  exports: [AuthenticationService],
  imports: [
    UsersModule,
    PassportModule,
    JwtModule.register({
      secret: jwtConstants.secret,
      signOptions: { expiresIn: '60s' },
    }),
  ],
  providers: [
    AuthenticationService,
    LocalAuthGuard,
    JwtAuthGuard,
    LocalStrategy,
    JwtStrategy,
  ],
})
export class AuthenticationModule {}
