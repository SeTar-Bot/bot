import pkg from 'mongoose';
const { model } = pkg;
import GuildSchema from "../Schemas/Guild";
const GuildModel = model('Guilds', GuildSchema);
export default GuildModel;