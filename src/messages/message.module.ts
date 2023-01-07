import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { SyslogMessage, MessageSchema } from './schemas/message.schemas';
import { MessageResolver } from './message.resolver';
import { MessageService } from './message.service';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: SyslogMessage.name, schema: MessageSchema },
    ]),
  ],
  controllers: [],
  providers: [MessageResolver, MessageService, SyslogMessage],
})
export class MessageModule {}
