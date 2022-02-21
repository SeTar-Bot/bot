import pkg from 'mongoose';
const { model } = pkg;
import UserSchema from "../Schemas/User";
const UserModel = model('Users', UserSchema);
export default UserModel;