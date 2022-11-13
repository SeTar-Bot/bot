import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { I18nModule } from 'nestjs-i18n';
import { join } from 'path';
import { BotModule } from './bot/bot.module';
import { CommandsModule } from './commands/commands.module';
import { configuration, validationSchema } from './config/configuration';
import { GuildsModule } from './guilds/guilds.module';
import { UsersModule } from './users/users.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      load: [configuration],
      validationSchema,
    }),
    MongooseModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: async (configService: ConfigService) => ({
        uri: configService.get('mongo.uri'),
      }),
      inject: [ConfigService],
    }),
    I18nModule.forRoot({
      fallbackLanguage: 'en',
      loaderOptions: {
        path: join(__dirname, 'i18n'),
        watch: true,
      },
    }),
    UsersModule,
    GuildsModule,
    CommandsModule,
    BotModule,
  ],
})
export class AppModule {}
