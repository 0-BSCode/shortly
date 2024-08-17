import { Module } from '@nestjs/common';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UrlModule } from '../url/url.module';
import { ConfigServiceModule } from '@services/config-service';

@Module({
  imports: [ConfigServiceModule, UrlModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
