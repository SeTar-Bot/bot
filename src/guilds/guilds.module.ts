import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Guild, GuildSchema } from '../schemas';
import { GuildsService } from './guilds.service';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Guild.name, schema: GuildSchema }]),
  ],
  providers: [GuildsService],
  exports: [GuildsService],
})
export class GuildsModule {}
