import { ArgsType, Field, Int } from '@nestjs/graphql';
import { Max, Min } from 'class-validator';
import { FACILITY, SEVERITY } from '../schemas/message.schemas';

@ArgsType()
export class MessageArgs {
  @Field((type) => Int)
  @Min(0)
  skip = 0;

  @Field((type) => Int)
  @Min(1)
  @Max(50)
  take = 25;

  @Field((type) => Int, {
    nullable: true,
  })
  @Min(0)
  @Max(23)
  facility?: FACILITY;

  @Field((type) => Int, {
    nullable: true,
  })
  @Min(0)
  @Max(7)
  severity?: SEVERITY;

  @Field((type) => [String], {
    nullable: true,
  })
  apps?: string[];

  @Field((type) => [String], {
    nullable: true,
  })
  hostnames?: string[];

  @Field({
    nullable: true,
  })
  messageContains?: string;

  @Field({
    nullable: true,
  })
  after?: Date;

  @Field({
    nullable: true,
  })
  before?: Date;
}
