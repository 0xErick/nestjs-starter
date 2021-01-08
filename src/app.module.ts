import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';

import { MongooseModule } from '@nestjs/mongoose';
import { CatModule } from './cat/cat.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    MongooseModule.forRootAsync({
      imports: [ConfigModule],
      connectionName: 'mongodb_1',
      useFactory: async (config: ConfigService) => {
        return {
          uri: config.get('mongodb_1'),
          useNewUrlParser: true,
          useUnifiedTopology: true,
        };
      },
      inject: [ConfigService],
    }),
    CatModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
