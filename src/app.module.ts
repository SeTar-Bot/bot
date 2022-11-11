import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import GeneralConfig from './config';
import { DiscordModule } from './discord/discord.module';
import { ComponentsModule } from './components/components.module';
import { DatabaseModule } from './database/database.module';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    ConfigModule.forRoot({
      load: [GeneralConfig],
      isGlobal: true,
    }),
    MongooseModule.forRoot(process.env.MONGODB_URL),
    DiscordModule.forRoot(process.env.DISCORD_TOKEN),
    ComponentsModule,
    DatabaseModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
