import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema({ timestamps: true })
export class DatabaseCommand {
  @Prop({ type: String, required: true, unique: true })
  name: string;

  @Prop({ type: String, required: true })
  desc: string;

  @Prop({ type: Boolean, required: false, default: true })
  available: boolean;
}

export const CommandSchema = SchemaFactory.createForClass(DatabaseCommand);
