import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CommandExistException, CommandNotFoundException } from '../exceptions';
import { Command, CommandDocument } from '../schemas/command';

@Injectable()
export class CommandsService {
  constructor(
    @InjectModel(Command.name)
    private readonly commandModel: Model<CommandDocument>,
  ) {}

  async register(name: string, description: string, isAvailable = true) {
    const commandExist = await this.commandModel.findOne({ name });
    if (commandExist) throw new CommandExistException();

    return new this.commandModel({ name, description, isAvailable }).save();
  }

  async update(name: string, description: string, isAvailable = true) {
    return await this.commandModel.findOneAndUpdate(
      { name },
      { name, description, isAvailable },
      { new: true, upsert: true },
    );
  }

  async updateStatus(name: string, status: boolean) {
    const commandExist = await this.commandModel.findOne({ name });
    if (!commandExist) throw new CommandNotFoundException();

    return await this.commandModel.findByIdAndUpdate(
      commandExist._id,
      { isAvailable: status },
      { new: true },
    );
  }

  async remove(name: string) {
    const commandExist = await this.commandModel.findOne({ name });
    if (!commandExist) throw new CommandNotFoundException();

    return await this.commandModel.findByIdAndDelete(commandExist._id);
  }
}
