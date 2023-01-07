import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { SyslogMessage, MessageSchema } from './schemas/message.schemas';
import { MessageResolver } from './message.resolver';
import { DateScalar } from 'src/common/scalars/date.scalar';
import { MessageService } from './message.service';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: SyslogMessage.name, schema: MessageSchema },
    ]),
  ],
  controllers: [],
  providers: [MessageResolver, MessageService, DateScalar],
})
export class MessageModule {}
