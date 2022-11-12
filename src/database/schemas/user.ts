import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';
import { Permission } from '../../constants/enums/permission';
import { Role } from '../../constants/enums/role';

export type UserDocument = HydratedDocument<User>;

@Schema({ timestamps: true })
export class User {
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

export const UserSchema = SchemaFactory.createForClass(User);
