import pkg from 'mongoose';
const {
  model
} = pkg;
import GuildSchema from "../Schemas/Guild.mjs";
const GuildModel = model('Guilds', GuildSchema);
export default GuildModel;