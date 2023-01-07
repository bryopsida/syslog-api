import { Module } from '@nestjs/common';
import { HealthModule } from './health/health.module';
import { LoggerModule } from 'nestjs-pino';
import { MercuriusDriver, MercuriusDriverConfig } from '@nestjs/mercurius';
import { GraphQLModule } from '@nestjs/graphql';
import { MongooseModule } from '@nestjs/mongoose';
import { MessageModule } from './messages/message.module';
import { CommonModule } from './common/common.module';

@Module({
  imports: [
    CommonModule,
    HealthModule,
    MessageModule,
    LoggerModule.forRoot(),
    GraphQLModule.forRoot<MercuriusDriverConfig>({
      driver: MercuriusDriver,
      autoSchemaFile: 'schema.gql',
      subscription: true,
      graphiql: true,
    }),
    MongooseModule.forRoot('mongodb://localhost:27017/syslog'),
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
