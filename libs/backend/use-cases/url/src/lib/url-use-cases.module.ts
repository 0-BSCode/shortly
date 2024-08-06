import { Module } from '@nestjs/common';
import { UrlUseCases } from './url.use-case';
import { DataServicesModule } from '@services';


@Module({
  imports: [DataServicesModule],
  providers: [UrlUseCases],
  exports: [UrlUseCases],
})
export class UrlUseCasesModule {}
