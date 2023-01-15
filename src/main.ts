import { NestFactory } from '@nestjs/core';
import { Logger } from 'nestjs-pino';
import {
  FastifyAdapter,
  NestFastifyApplication,
} from '@nestjs/platform-fastify';
import { AppModule } from './app.module';
import helmet from '@fastify/helmet';
import { UsersService } from './users/users.service';
import { hash } from 'argon2';

async function bootstrap() {
  const app = await NestFactory.create<NestFastifyApplication>(
    AppModule,
    new FastifyAdapter({
      logger: true,
    }),
    {
      bufferLogs: true,
    },
  );
  app.useLogger(app.get(Logger));
  app.register(helmet);
  const userService = app.get(UsersService);
  await userService.upsert({
    username: 'maintainer',
    password: await hash(process.env.MAINTAINER_PASSWORD || 'maintainer'),
  });
  await app.listen(3000, '0.0.0.0');
}
bootstrap();
