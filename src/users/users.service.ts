import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Permission } from '../constants/enums/permission';
import { Role } from '../constants/enums/role';
import { User, UserDocument } from '../schemas/user';

@Injectable()
export class UsersService {
  constructor(
    @InjectModel(User.name)
    private readonly userModel: Model<UserDocument>,
  ) {}

  async register(userId: string) {
    return await this.userModel.create({ userId });
  }

  async changePermission(userId: string, permission: Permission) {
    return await this.userModel.findByIdAndUpdate(
      { userId },
      { permission },
      { new: true },
    );
  }

  async updateRole(userId: string, role: Role) {
    return await this.userModel.findByIdAndUpdate(
      { userId },
      { role },
      { new: true },
    );
  }

  async remove(userId: string) {
    return await this.userModel.findByIdAndDelete({ userId });
  }
}
