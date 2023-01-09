import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User, UserDocument } from './schemas/users.schemas';

@Injectable()
export class UsersService {
  constructor(
    @InjectModel(User.name)
    private userModel: Model<UserDocument>,
  ) {}

  async findOne(username: string): Promise<User | undefined> {
    return this.userModel
      .findOne({
        username: username,
      })
      .exec();
  }

  async upsert(user: User): Promise<User | undefined> {
    return this.userModel.findOneAndUpdate(
      { username: user.username },
      { $set: user },
      { upsert: true, new: true },
    );
  }
}
