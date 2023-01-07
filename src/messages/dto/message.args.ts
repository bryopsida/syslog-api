import { ArgsType, Field, Int } from '@nestjs/graphql';
import { Max, Min } from 'class-validator';
import { FACILITY, SEVERITY } from '../schemas/message.schemas';

@ArgsType()
export class MessageArgs {
  @Field((_type) => Int)
  @Min(0)
  skip = 0;

  @Field((_type) => Int)
  @Min(1)
  @Max(50)
  take = 25;

  @Field((_type) => Int, {
    nullable: true,
  })
  @Min(0)
  @Max(23)
  facility?: FACILITY;

  @Field((_type) => Int, {
    nullable: true,
  })
  @Min(0)
  @Max(7)
  severity?: SEVERITY;

  @Field((_type) => [String], {
    nullable: true,
  })
  apps?: string[];

  @Field((_type) => [String], {
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
