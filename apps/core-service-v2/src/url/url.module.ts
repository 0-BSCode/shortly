import { Module } from '@nestjs/common';
import { UrlResolver } from './url.resolver';
import { UrlUseCasesModule } from '@url-use-cases';

@Module({
  imports: [UrlUseCasesModule],
  providers: [UrlResolver],
})
export class UrlModule {}
