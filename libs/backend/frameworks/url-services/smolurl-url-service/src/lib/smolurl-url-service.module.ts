import { Module } from '@nestjs/common';
import { SmolurlUrlService } from './smolurl-url-service.service';
import { IUrlService } from '@dto';

@Module({
  providers: [{
    provide: IUrlService,
    useClass: SmolurlUrlService
  }],
  exports: [
    IUrlService
  ],
})
export class SmolurlUrlServiceModule {}
