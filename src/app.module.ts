import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { I18nModule } from 'nestjs-i18n';
import GeneralConfig from './config';
import { DiscordModule } from './discord/discord.module';
import { DatabaseModule } from './database/database.module';
import path from 'path';

@Module({
  imports: [
    ConfigModule.forRoot({
      load: [GeneralConfig],
      isGlobal: true,
    }),
    MongooseModule.forRoot(process.env.MONGODB_URL),
    I18nModule.forRoot({
      fallbackLanguage: 'en',
      loaderOptions: {
        path: path.join(__dirname, 'i18n'),
        watch: true,
      },
    }),
    DiscordModule.forRoot(process.env.DISCORD_TOKEN),
    DatabaseModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
