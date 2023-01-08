import { ArgsType, Field, Int } from '@nestjs/graphql';
import { Max, Min } from 'class-validator';
import { FACILITY, SEVERITY } from '../schemas/message.schemas';

@ArgsType()
export class MessageArgs {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  @Field((_type) => Int)
  @Min(0)
  skip = 0;
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  @Field((_type) => Int)
  @Min(1)
  @Max(50)
  take = 25;
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  @Field((_type) => Int, {
    nullable: true,
  })
  @Min(0)
  @Max(23)
  facility?: FACILITY;

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  @Field((_type) => Int, {
    nullable: true,
  })
  @Min(0)
  @Max(7)
  severity?: SEVERITY;
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  @Field((_type) => [String], {
    nullable: true,
  })
  apps?: string[];
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
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
