import * as Joi from 'joi';

// Custom configuration
export const configuration = () => ({
  discord: {
    bot: {
      token: process.env.DISCORD_BOT_TOKEN,
      prefix: process.env.DISCORD_BOT_PREFIX,
      slashCommandsGuildId: process.env.DISCORD_BOT_SLASH_COMMANDS_GUILD_ID,
    },
  },
  mongo: {
    uri: process.env.MONGO_URI,
  },
});

export enum Environment {
  Development = 'development',
  Production = 'production',
  Test = 'test',
  Provision = 'provision',
}

// Validation schema
export const validationSchema = Joi.object({
  NODE_ENV: Joi.string()
    .valid(
      Environment.Development,
      Environment.Production,
      Environment.Test,
      Environment.Provision,
    )
    .default(Environment.Development),

  // Discord
  DISCORD_BOT_TOKEN: Joi.string().required(),
  DISCORD_BOT_PREFIX: Joi.string().default('!').optional(),
  DISCORD_BOT_SLASH_COMMANDS_GUILD_ID: Joi.string().optional(),

  // Database
  MONGODB_URI: Joi.string()
    .uri()
    .default('mongodb://root:example@127.0.0.1:27017')
    .optional(),
});
