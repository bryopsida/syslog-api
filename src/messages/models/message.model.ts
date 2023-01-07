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
}
