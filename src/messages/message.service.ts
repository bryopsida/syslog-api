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
    const query: Record<string, any> = {
      $and: [],
    };

    if (args.hostnames) {
      query.$and.push({
        hostname: {
          $in: args.hostnames,
        },
      });
    }

    if (args.apps) {
      query.$and.push({
        app: {
          $in: args.apps,
        },
      });
    }

    if (args.messageContains) {
      query.$and.push({
        message: {
          $regex: `.*${args.messageContains}.*`,
        },
      });
    }

    if (args.severity != null) {
      query.$and.push({
        severity: args.severity,
      });
    }

    if (args.facility != null) {
      query.$and.push({
        facility: args.facility,
      });
    }

    if (args.after) {
      query.$and.push({
        timestamp: {
          $gte: args.after,
        },
      });
    }

    if (args.before) {
      query.$and.push({
        timestamp: {
          $lte: args.before,
        },
      });
    }

    // before, after timestamp

    return this.messageModel
      .find(query)
      .sort({
        timestamp: 'desc',
      })
      .limit(args.take)
      .skip(args.skip)
      .exec();
  }
}
