import { Module } from '@nestjs/common';
import { UrlUseCasesModule } from '@url-use-cases';
import { UrlController } from './url.controller';

@Module({
  imports: [UrlUseCasesModule],
  controllers: [UrlController],
})
export class UrlModule {}
