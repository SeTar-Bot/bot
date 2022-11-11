import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { DatabaseService } from './database.service';
import {
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
    ]),
  ],
  providers: [DatabaseService],
})
export class DatabaseModule {}
