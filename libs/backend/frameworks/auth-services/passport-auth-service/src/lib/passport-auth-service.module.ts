import { Module } from '@nestjs/common';
import { DataServiceModule } from '@services/data-service';
import { PassportModule } from '@nestjs/passport';
import { PassportLocalStrategy } from './strategies/local.strategy';
import { PassportLocalAuthGuard } from './guards/local.guard';

@Module({
  imports: [DataServiceModule, PassportModule],
  providers: [PassportLocalStrategy, PassportLocalAuthGuard],
  exports: [PassportLocalAuthGuard],
})
export class PassportAuthServiceModule {}
