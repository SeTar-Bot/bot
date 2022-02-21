import pkg from 'mongoose';
const { Schema } = pkg;

const GuildSchema = new Schema({
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