import { Module } from '@nestjs/common';
import {DrizzleDataServicesModule} from '@drizzle-data-service';

@Module({
  imports: [DrizzleDataServicesModule],
  exports: [DrizzleDataServicesModule],
})
export class DataServicesModule {}
