import { Document } from 'mongoose';
import { locales } from 'src/types';

export interface GuildTypeDoc {
  _id: string;
  locale: locales;
  vip: boolean;
  createdAt: Date;
  updatedAt: Date;
}

export interface iGuild extends Document<string, unknown, GuildTypeDoc> {
  _id: string;
  locale: locales;
  vip: boolean;
  createdAt: Date;
  updatedAt: Date;
}
