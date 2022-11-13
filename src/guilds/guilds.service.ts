import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import mongoose, { Model } from 'mongoose';
import { Locale } from '../constants/enums/locale';
import { Guild, GuildDocument } from '../schemas/guild';

@Injectable()
export class GuildsService {
  constructor(
    @InjectModel(Guild.name)
    private readonly guildModel: Model<GuildDocument>,
  ) {}

  async register(guildId: string) {
    return await this.guildModel.create({ guildId });
  }

  async updateVIPStatus(_id: string, vip: boolean) {
    return await this.guildModel.findByIdAndUpdate(_id, { vip }, { new: true });
  }

  async updateLocale(_id: mongoose.ObjectId, locale: Locale) {
    return await this.guildModel.findByIdAndUpdate(
      _id,
      { locale },
      { new: true },
    );
  }

  async remove(_id: mongoose.ObjectId) {
    return await this.guildModel.findByIdAndDelete(_id);
  }
}
