import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Permission } from '../../constants/enums/permission';
import { Role } from '../../constants/enums/role';

@Schema({ timestamps: true })
export class DatabaseUser {
  @Prop({ type: String, unique: true, required: true })
  _id: string;

  @Prop({
    type: Number,
    enum: Permission,
    required: false,
    default: Permission.MEMBER,
  })
  permission: Permission;

  @Prop({ type: String, enum: Role, required: false, default: Role.MEMBER })
  role: Role;
}

export const UserSchema = SchemaFactory.createForClass(DatabaseUser);
