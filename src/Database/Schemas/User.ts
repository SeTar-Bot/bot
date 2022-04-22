import pkg from 'mongoose';
const { Schema } = pkg;
import { dbUserSchema } from "../../../types/database"

const UserSchema = new Schema<dbUserSchema>({
    id: {
        type: String,
        required: true,
        length: 18
    },
    permission: {
        type: Number,
        required: false,
        default: 1
    },
    role: {
        type: String,
        default: "member",
        required: false
    },
    playlist: {
        type: [{}],
        default: [],
        required: false,
        length: 20
    },
    vip: {
        type: Boolean,
        required: false,
        default: false
    }
});

export default UserSchema;