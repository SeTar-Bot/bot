import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema({ timestamps: true })
export class DatabaseCommand {
  @Prop({ type: String, required: true, unique: true })
  name: string;

  @Prop({ type: String, required: true })
  description: string;

  @Prop({ type: Boolean, required: false, default: true })
  isAvailable: boolean;
}

export const CommandSchema = SchemaFactory.createForClass(DatabaseCommand);
