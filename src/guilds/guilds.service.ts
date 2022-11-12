import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Locale } from '../constants/enums/locale';
import { Guild, GuildDocument } from '../database/schemas';
import { GuildExistException, GuildNotFoundException } from '../exceptions';

@Injectable()
export class GuildsService {
  constructor(
    @InjectModel(Guild.name)
    private readonly guildModel: Model<GuildDocument>,
  ) {}

  async register(_id: string) {
    const guildExist = await this.guildModel.findOne({ _id });
    if (guildExist) throw new GuildExistException();

    const newGuild = new this.guildModel({ _id });
    return await newGuild.save();
  }

  async makeVIP(_id: string) {
    const guildExist = await this.guildModel.findOne({ _id });
    if (!guildExist) throw new GuildNotFoundException();

    return await this.guildModel.findByIdAndUpdate(
      _id,
      { vip: !guildExist.vip },
      { new: true },
    );
  }

  async updateLocale(_id: string, locale: Locale) {
    const userExist = await this.guildModel.findOne({ _id });
    if (!userExist) throw new GuildNotFoundException();

    return await this.guildModel.findByIdAndUpdate(
      _id,
      { locale },
      { new: true },
    );
  }

  async remove(_id: string) {
    const guildExist = await this.guildModel.findOne({ _id });
    if (!guildExist) throw new GuildNotFoundException();

    return await this.guildModel.findByIdAndDelete(_id);
  }
}
