import pkg from 'mongoose';
import { dbGuildSchema } from "../../../types/database"
const { Schema } = pkg;

const GuildSchema = new Schema<dbGuildSchema>({
    id: {
        type: String,
        required: true,
        length: 18
    },
    prefix: {
        type: String,
        required: false,
        default: 'st',
        length: 3
    },
    locale: {
        type: String,
        required: false,
        default: 'en-us',
        length: 5
    },
    vip: {
        type: Boolean,
        required: false,
        default: false
    }
});
export default GuildSchema;