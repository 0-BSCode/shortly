import { Module } from '@nestjs/common';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UrlModule } from '../url/url.module';
import { ConfigServicesModule } from '@services';

@Module({
  imports: [ConfigServicesModule, UrlModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
