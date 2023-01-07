import { NotFoundException } from '@nestjs/common';
import { Args, Context, Query, Resolver, Subscription } from '@nestjs/graphql';
import { PubSub } from 'mercurius';
import { MessageArgs } from './dto/message.args';
import { Message } from './models/message.model';
import { MessageService } from './message.service';

@Resolver((of) => Message)
export class MessageResolver {
  constructor(private readonly service: MessageService) {}

  @Query((returns) => [Message])
  messages(@Args() args: MessageArgs): Promise<Message[]> {
    return this.service.findAll(args);
  }

  @Subscription((returns) => Message)
  messagesAdded(@Context('pubsub') pubSub: PubSub) {
    return pubSub.subscribe('messagesAdded');
  }
}
