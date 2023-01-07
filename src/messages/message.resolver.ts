import { Args, Context, Query, Resolver, Subscription } from '@nestjs/graphql';
import { PubSub } from 'mercurius';
import { MessageArgs } from './dto/message.args';
import { Message } from './models/message.model';
import { MessageService } from './message.service';
import { UseGuards } from '@nestjs/common';
import { GqlAuthGuard } from 'src/authentication/guards/gql-auth.guard';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
@Resolver((_of) => Message)
export class MessageResolver {
  constructor(private readonly service: MessageService) {}
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  @Query((_returns) => [Message])
  @UseGuards(GqlAuthGuard)
  messages(@Args() args: MessageArgs): Promise<Message[]> {
    return this.service.findAll(args);
  }
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  @Subscription((_returns) => Message)
  @UseGuards(GqlAuthGuard)
  messagesAdded(@Context('pubsub') pubSub: PubSub) {
    return pubSub.subscribe('messagesAdded');
  }
}
