import { Module } from '@nestjs/common';
import { AuthenticationService } from './authentication.service';
import { UsersModule } from 'src/users/users.module';
import { LocalStrategy } from './strategies/local.strategy';
import { PassportModule } from '@nestjs/passport';
import { LoginController } from './controllers/login.controller';
import { LocalAuthGuard } from './guards/local-auth.guard';

@Module({
  controllers: [LoginController],
  exports: [LocalAuthGuard],
  imports: [UsersModule, PassportModule],
  providers: [AuthenticationService, LocalStrategy],
})
export class AuthenticationModule {}
