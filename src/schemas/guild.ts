import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';
import { Locale } from '../constants/enums/locale';

export type GuildDocument = HydratedDocument<Guild>;

@Schema({ timestamps: true })
export class Guild {
  @Prop({ type: String, unique: true, required: true })
  _id: string;

  @Prop({
    type: String,
    enum: Locale,
    required: false,
    default: Locale.ENGLISH,
  })
  locale: Locale;

  @Prop({ type: Boolean, required: false, default: false })
  vip: boolean;
}

export const GuildSchema = SchemaFactory.createForClass(Guild);
