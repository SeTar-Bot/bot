import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { DatabaseService } from './database.service';
import {
  CommandSchema,
  Command,
  Guild,
  User,
  GuildSchema,
  UserSchema,
} from './schemas';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: Guild.name,
        schema: GuildSchema,
      },
      {
        name: User.name,
        schema: UserSchema,
      },
      {
        name: Command.name,
        schema: CommandSchema,
      },
    ]),
  ],
  providers: [DatabaseService],
})
export class DatabaseModule {}
