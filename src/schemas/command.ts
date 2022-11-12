import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type CommandDocument = HydratedDocument<Command>;

@Schema({ timestamps: true })
export class Command {
  @Prop({ type: String, required: true, unique: true })
  name: string;

  @Prop({ type: String, required: true })
  desc: string;

  @Prop({ type: Boolean, required: false, default: true })
  available: boolean;
}

export const CommandSchema = SchemaFactory.createForClass(Command);
