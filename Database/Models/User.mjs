import pkg from 'mongoose';
const {
  model
} = pkg;
import UserSchema from "../Schemas/User.mjs";
const UserModel = model('Users', UserSchema);
export default UserModel;