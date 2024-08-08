import { Module } from '@nestjs/common';
import { UrlUseCases } from './url.use-case';
import { DataServicesModule, UrlServicesModule } from '@services';

@Module({
  imports: [DataServicesModule, UrlServicesModule],
  providers: [UrlUseCases],
  exports: [UrlUseCases],
})
export class UrlUseCasesModule {}
