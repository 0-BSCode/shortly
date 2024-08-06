import { Module } from '@nestjs/common';
import { DrizzlePGModule } from '@knaadh/nestjs-drizzle-pg';
import { DrizzleOrmDbService } from './drizzle-db-lib.service';

@Module({
  imports: [
    DrizzlePGModule.registerAsync({
      tag: 'DB_DEV',
      useClass: DrizzleOrmDbService,
    }),
  ],
  exports: [],
})
export class DrizzleDbLibModule {}
