import { Module } from '@nestjs/common';
import { DrizzlePGModule } from '@knaadh/nestjs-drizzle-pg';
import { DrizzleConfigService } from './drizzle-config.service';
import { DrizzleUrlRepository } from './repositories/drizzle-url.repository';
import { IDataService } from '@dto';
import { DrizzleDataService } from './drizzle-data-service.service';

@Module({
  imports: [
    DrizzlePGModule.registerAsync({
      tag: 'DB_DEV',
      useClass: DrizzleConfigService,
    }),
  ],
  providers: [
    DrizzleUrlRepository, 
    {
      provide: IDataService,
      useClass: DrizzleDataService
    }
  ],
  exports: [IDataService],
})
export class DrizzleDataServicesModule {}
