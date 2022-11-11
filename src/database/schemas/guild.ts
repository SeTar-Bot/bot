import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { locales } from 'src/types';

@Schema({ timestamps: true })
export class DatabaseGuild {
  @Prop({ type: String, unique: true, required: true })
  _id: string;

  @Prop({
    type: String,
    enum: locales,
    required: false,
    default: locales.ENGLISH,
  })
  locale: locales;

  @Prop({ type: Boolean, required: false, default: false })
  vip: boolean;
}

export const GuildSchema = SchemaFactory.createForClass(DatabaseGuild);
