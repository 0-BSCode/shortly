import { Module } from '@nestjs/common';
import { TypeormDataService } from './typeorm-data-service.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TypeOrmConfigService } from './typeorm-config.service';
import { TypeormUrlRepository } from './repositories/typeorm-url.repository';
import { IDataService } from '@dto';
import { Url } from './schema/url.schema';
import { ConfigService } from '@nestjs/config';
import { User } from './schema/user.schema';
import { TypeormUserRepository } from './repositories/typeorm-user.repository';

@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      inject: [ConfigService],
      useClass: TypeOrmConfigService,
    }),
    TypeOrmModule.forFeature([Url, User]),
  ],
  providers: [
    TypeormUrlRepository,
    TypeormUserRepository,
    {
      provide: IDataService,
      useClass: TypeormDataService,
    },
  ],
  exports: [IDataService],
})
export class TypeormDataServiceModule {}
