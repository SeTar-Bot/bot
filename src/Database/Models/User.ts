import pkg from 'mongoose';
const { model } = pkg;
import UserSchema from "../Schemas/User";
import { dbUserSchema } from "../../../types/database"
const UserModel = model<dbUserSchema>('Users', UserSchema);
export default UserModel;