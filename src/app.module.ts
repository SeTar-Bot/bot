import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { I18nModule } from 'nestjs-i18n';
import { join } from 'path';
import GeneralConfig from './config';
import { DatabaseModule } from './database/database.module';
import { DiscordModule } from './discord/discord.module';
import { UsersModule } from './users/users.module';
import { GuildsModule } from './guilds/guilds.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      load: [GeneralConfig],
      isGlobal: true,
    }),
    MongooseModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: async (configService: ConfigService) => ({
        uri: configService.get<string>('MONGODB_URI'),
      }),
      inject: [ConfigService],
    }),
    DatabaseModule,
    I18nModule.forRoot({
      fallbackLanguage: 'en',
      loaderOptions: {
        path: join(__dirname, 'i18n'),
        watch: true,
      },
    }),
    DiscordModule.forRoot(process.env.DISCORD_TOKEN),
    UsersModule,
    GuildsModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
