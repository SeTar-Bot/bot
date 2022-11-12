import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Locale } from '../../constants/enums/locale';

@Schema({ timestamps: true })
export class DatabaseGuild {
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

export const GuildSchema = SchemaFactory.createForClass(DatabaseGuild);
