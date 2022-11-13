import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
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

  async changeVIPStatus(guildId: string, vip: boolean) {
    return await this.guildModel.findByIdAndUpdate(
      { guildId },
      { vip },
      { new: true },
    );
  }

  async updateLocale(guildId: string, locale: Locale) {
    return await this.guildModel.findByIdAndUpdate(
      { guildId },
      { locale },
      { new: true },
    );
  }

  async remove(guildId: string) {
    return await this.guildModel.findByIdAndDelete({ guildId });
  }
}
