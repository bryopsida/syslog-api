import { Injectable } from '@nestjs/common';
import { MessageArgs } from './dto/message.args';
import { MessageDocument, SyslogMessage } from './schemas/message.schemas';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

@Injectable()
export class MessageService {
  constructor(
    @InjectModel(SyslogMessage.name)
    private messageModel: Model<MessageDocument>,
  ) {}

  async findAll(args: MessageArgs): Promise<SyslogMessage[]> {
    return this.messageModel
      .find()
      .sort({
        timestamp: 'desc',
      })
      .limit(args.take)
      .skip(args.skip)
      .exec();
  }
}
