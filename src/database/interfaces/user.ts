import { Document } from 'mongoose';
import { permissions, roles } from 'src/types';

export interface UserTypeDoc {
  _id: string;
  permission: permissions;
  role: roles;
  createdAt: Date;
  updatedAt: Date;
}

export interface iUser extends Document<string, unknown, UserTypeDoc> {
  _id: string;
  permission: permissions;
  role: roles;
  createdAt: Date;
  updatedAt: Date;
}
