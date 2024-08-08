import { Module } from '@nestjs/common';
import { TypeormDataServiceModule } from '@typeorm-data-service';

@Module({
  imports: [TypeormDataServiceModule],
  exports: [TypeormDataServiceModule],
})
export class DataServicesModule {}
