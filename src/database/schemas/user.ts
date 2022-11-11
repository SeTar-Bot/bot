import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { permissions, roles } from 'src/types';

@Schema({ timestamps: true })
export class DatabaseUser {
  @Prop({ type: String, unique: true, required: true })
  _id: string;

  @Prop({
    type: Number,
    enum: permissions,
    required: false,
    default: permissions.MEMBER,
  })
  permission: permissions;

  @Prop({ type: String, enum: roles, required: false, default: roles.MEMBER })
  role: roles;
}

export const UserSchema = SchemaFactory.createForClass(DatabaseUser);
