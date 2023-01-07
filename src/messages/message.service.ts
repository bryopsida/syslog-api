import { Injectable } from '@nestjs/common';
import { MessageArgs } from './dto/message.args';
import { Message } from './models/message.model';

@Injectable()
export class MessageService {
  async findAll(args: MessageArgs): Promise<Message[]> {
    return [] as Message[];
  }
}
