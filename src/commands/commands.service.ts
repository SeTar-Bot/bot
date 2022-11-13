import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Command, CommandDocument } from '../schemas/command';

@Injectable()
export class CommandsService {
  constructor(
    @InjectModel(Command.name)
    private readonly commandModel: Model<CommandDocument>,
  ) {}

  async register(name: string, description: string, isAvailable = true) {
    return await this.commandModel.create({ name, description, isAvailable });
  }

  async update(name: string, description: string, isAvailable = true) {
    return await this.commandModel.findOneAndUpdate(
      { name },
      { name, description, isAvailable },
      { new: true, upsert: true },
    );
  }

  async updateStatus(name: string, status: boolean) {
    return await this.commandModel.findByIdAndUpdate(
      { name },
      { isAvailable: status },
      { new: true },
    );
  }

  async remove(name: string) {
    return await this.commandModel.findOneAndDelete({ name });
  }
}
