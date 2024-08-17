import { Module } from '@nestjs/common';
import { PassportAuthServiceModule } from '@passport-auth-service';

@Module({
  imports: [PassportAuthServiceModule],
  exports: [PassportAuthServiceModule],
})
export class AuthServiceModule {}
