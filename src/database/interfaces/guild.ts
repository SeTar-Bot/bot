import { Document } from 'mongoose';
import { Locale } from '../../constants/enums/locale';

export interface GuildTypeDoc {
  _id: string;
  locale: Locale;
  vip: boolean;
  createdAt: Date;
  updatedAt: Date;
}

export interface iGuild extends Document<string, unknown, GuildTypeDoc> {
  _id: string;
  locale: Locale;
  vip: boolean;
  createdAt: Date;
  updatedAt: Date;
}
