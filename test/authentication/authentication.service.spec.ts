import { Test, TestingModule } from '@nestjs/testing';
import { AuthenticationService } from '../../src/authentication/authentication.service';
import { UsersModule } from '../../src/users/users.module';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';
import { JwtAuthGuard } from '../../src/authentication/guards/jwt-auth.guard';
import { LocalAuthGuard } from '../../src/authentication/guards/local-auth.guard';
import { JwtStrategy } from '../../src/authentication/strategies/jwt.strategy';
import { LocalStrategy } from '../../src/authentication/strategies/local.strategy';

describe('AuthenticationService', () => {
  let service: AuthenticationService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [
        UsersModule,
        PassportModule,
        JwtModule.register({
          secret: 'secret',
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
    }).compile();

    service = module.get<AuthenticationService>(AuthenticationService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
