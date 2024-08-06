import { Module } from '@nestjs/common';
import { UrlUseCases } from './url.use-case';
import { DataServicesModule } from '@services';


@Module({
  controllers: [DataServicesModule],
  providers: [UrlUseCases],
  exports: [UrlUseCases],
})
export class UrlUseCasesModule {}
