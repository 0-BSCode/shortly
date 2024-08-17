import { Module } from '@nestjs/common';
import { UrlUseCases } from './url.use-case';
import { DataServiceModule } from '@services/data-service';
import { UrlServiceModule } from '@services/url-service';

@Module({
  imports: [DataServiceModule, UrlServiceModule],
  providers: [UrlUseCases],
  exports: [UrlUseCases],
})
export class UrlUseCasesModule {}
