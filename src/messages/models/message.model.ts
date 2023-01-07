import { Field, ObjectType } from '@nestjs/graphql';
import { SEVERITY, FACILITY } from '../schemas/message.schemas';

@ObjectType({ description: 'message ' })
export class Message {
  @Field()
  timestamp?: Date;

  @Field({
    nullable: true,
  })
  severity: SEVERITY;

  @Field({
    nullable: true,
  })
  facility: FACILITY;

  @Field()
  message: string;

  @Field({
    nullable: true,
  })
  app?: string;

  @Field({
    nullable: true,
  })
  procId?: string;

  @Field({
    nullable: true,
  })
  msgId?: string;

  @Field({
    nullable: true,
  })
  hostname?: string;

  @Field()
  modelVersion: number;
}
