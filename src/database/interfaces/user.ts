import { Document } from 'mongoose';
import { Permission } from '../../constants/enums/permission';
import { Role } from '../../constants/enums/role';

export interface UserTypeDoc {
  _id: string;
  permission: Permission;
  role: Role;
  createdAt: Date;
  updatedAt: Date;
}

export interface iUser extends Document<string, unknown, UserTypeDoc> {
  _id: string;
  permission: Permission;
  role: Role;
  createdAt: Date;
  updatedAt: Date;
}
