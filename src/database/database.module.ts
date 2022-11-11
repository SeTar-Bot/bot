import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { DatabaseService } from './database.service';
import {
  CommandSchema,
  DatabaseCommand,
  DatabaseGuild,
  DatabaseUser,
  GuildSchema,
  UserSchema,
} from './schemas';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: DatabaseGuild.name,
        schema: GuildSchema,
      },
      {
        name: DatabaseUser.name,
        schema: UserSchema,
      },
      {
        name: DatabaseCommand.name,
        schema: CommandSchema,
      },
    ]),
  ],
  providers: [DatabaseService],
})
export class DatabaseModule {}
