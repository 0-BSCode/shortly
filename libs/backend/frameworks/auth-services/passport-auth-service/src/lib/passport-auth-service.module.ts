import { Module } from '@nestjs/common';
import { DataServiceModule } from '@services/data-service';
import { PassportModule } from '@nestjs/passport';
import { PassportLocalStrategy } from './strategies/local.strategy';
import { PassportJwtStrategy } from './strategies/jwt.strategy';

@Module({
  imports: [DataServiceModule, PassportModule],
  providers: [PassportLocalStrategy, PassportJwtStrategy],
  exports: [],
})
export class PassportAuthServiceModule {}
