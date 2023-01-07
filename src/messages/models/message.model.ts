import { Field, ObjectType } from '@nestjs/graphql';
import { SEVERITY, FACILITY } from '../schemas/message.schemas';

@ObjectType({ description: 'message ' })
export class Message {
  @Field()
  timestamp?: Date;

  @Field()
  severity: SEVERITY;

  @Field()
  facility: FACILITY;

  @Field()
  message: string;

  @Field()
  app?: string;

  @Field()
  procId?: string;

  @Field()
  msgId?: string;

  @Field()
  hostname?: string;

  @Field()
  modelVersion: number;
}
