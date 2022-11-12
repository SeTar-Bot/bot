import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import {
  CommandExistException,
  CommandNotFoundException,
} from 'src/exceptions';
import { Command, CommandDocument } from './schemas';

@Injectable()
export class DatabaseService {
  constructor(
    @InjectModel(Command.name)
    private readonly commandModel: Model<CommandDocument>,
  ) {}

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
