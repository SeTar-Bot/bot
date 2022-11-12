import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Permission } from '../constants/enums/permission';
import { Role } from '../constants/enums/role';
import { User, UserDocument } from '../database/schemas';
import { UserExistException, UserNotFoundException } from '../exceptions';

@Injectable()
export class UsersService {
  constructor(
    @InjectModel(User.name)
    private readonly userModel: Model<UserDocument>,
  ) {}

  async register(_id: string) {
    const userExist = await this.userModel.findOne({ _id });
    if (userExist) throw new UserExistException();

    const newUser = new this.userModel({ _id });
    return await newUser.save();
  }

  async changePermission(_id: string, permission: Permission) {
    const userExist = await this.userModel.findOne({ _id });
    if (!userExist) throw new UserNotFoundException();

    return await this.userModel.findByIdAndUpdate(
      _id,
      { permission },
      { new: true },
    );
  }

  async updateRole(_id: string, role: Role) {
    const userExist = await this.userModel.findOne({ _id });
    if (!userExist) throw new UserNotFoundException();

    return await this.userModel.findByIdAndUpdate(_id, { role }, { new: true });
  }

  async remove(_id: string) {
    const userExist = await this.userModel.findOne({ _id });
    if (!userExist) throw new UserNotFoundException();

    return await this.userModel.findByIdAndDelete(_id);
  }
}
