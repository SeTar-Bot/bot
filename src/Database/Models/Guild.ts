import pkg from 'mongoose';
const { model } = pkg;
import GuildSchema from "../Schemas/Guild";
import { dbGuildSchema } from "../../../types/database"
const GuildModel = model<dbGuildSchema>('Guilds', GuildSchema);
export default GuildModel;