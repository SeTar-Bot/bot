import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import {
  CommandExistException,
  CommandNotFoundException,
  GuildExistException,
  GuildNotFoundException,
  UserExistException,
  UserNotFoundException,
} from 'src/exceptions';
import { locales, permissions, roles } from 'src/types';
import { CommandTypeDoc, GuildTypeDoc, UserTypeDoc } from './interfaces';
import { DatabaseCommand, DatabaseGuild, DatabaseUser } from './schemas';

@Injectable()
export class DatabaseService {
  constructor(
    @InjectModel(DatabaseGuild.name)
    private readonly guildModel: Model<GuildTypeDoc>,
    @InjectModel(DatabaseUser.name)
    private readonly userModel: Model<UserTypeDoc>,
    @InjectModel(DatabaseCommand.name)
    private readonly commandModel: Model<CommandTypeDoc>,
  ) {}

  /* USER FUNCTIONS */
  async registerUser(_id: string) {
    const userExist = await this.userModel.findOne({ _id });
    if (userExist) throw new UserExistException();

    const newUser = new this.userModel({ _id });
    return await newUser.save();
  }

  async changeUserPermission(_id: string, permission: permissions) {
    const userExist = await this.userModel.findOne({ _id });
    if (!userExist) throw new UserNotFoundException();

    return await this.userModel.findByIdAndUpdate(
      _id,
      { permission },
      { new: true },
    );
  }

  async changeUserRole(_id: string, role: roles) {
    const userExist = await this.userModel.findOne({ _id });
    if (!userExist) throw new UserNotFoundException();

    return await this.userModel.findByIdAndUpdate(_id, { role }, { new: true });
  }

  async removeUser(_id: string) {
    const userExist = await this.userModel.findOne({ _id });
    if (!userExist) throw new UserNotFoundException();

    return await this.userModel.findByIdAndDelete(_id);
  }
  /* --------------- */
  /* GUILD FUNCTIONS */
  async registerGuild(_id: string) {
    const guildExist = await this.guildModel.findOne({ _id });
    if (guildExist) throw new GuildExistException();

    const newGuild = new this.guildModel({ _id });
    return await newGuild.save();
  }

  async changeGuildVip(_id: string) {
    const guildExist = await this.guildModel.findOne({ _id });
    if (!guildExist) throw new GuildNotFoundException();

    return await this.guildModel.findByIdAndUpdate(
      _id,
      { vip: !guildExist.vip },
      { new: true },
    );
  }

  async changeGuildLocale(_id: string, locale: locales) {
    const userExist = await this.guildModel.findOne({ _id });
    if (!userExist) throw new GuildNotFoundException();

    return await this.guildModel.findByIdAndUpdate(
      _id,
      { locale },
      { new: true },
    );
  }

  async removeGuild(_id: string) {
    const guildExist = await this.guildModel.findOne({ _id });
    if (!guildExist) throw new GuildNotFoundException();

    return await this.guildModel.findByIdAndDelete(_id);
  }
  /* --------------- */
  /* COMMAND FUNCTIONS */

  async registerCommand(name: string, description: string, isAvailable = true) {
    const commandExist = await this.commandModel.findOne({ name });
    if (commandExist) throw new CommandExistException();

    return new this.commandModel({ name, description, isAvailable }).save();
  }

  async updateCommand(name: string, description: string, isAvailable = true) {
    return await this.commandModel.findOneAndUpdate(
      { name },
      { name, description, isAvailable },
      { new: true, upsert: true },
    );
  }

  async changeCommandStatus(name: string, status: boolean) {
    const commandExist = await this.commandModel.findOne({ name });
    if (!commandExist) throw new CommandNotFoundException();

    return await this.commandModel.findByIdAndUpdate(
      commandExist._id,
      { isAvailable: status },
      { new: true },
    );
  }

  async removeCommand(name: string) {
    const commandExist = await this.commandModel.findOne({ name });
    if (!commandExist) throw new CommandNotFoundException();

    return await this.commandModel.findByIdAndDelete(commandExist._id);
  }
}
