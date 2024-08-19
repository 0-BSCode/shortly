import { Module } from '@nestjs/common';
import { DataServiceModule } from '@services/data-service';
import { AuthUseCases } from './auth.use-case';
import { AuthServiceModule } from '@services/auth-service';

@Module({
  imports: [DataServiceModule, AuthServiceModule],
  providers: [AuthUseCases],
  exports: [AuthUseCases],
})
export class AuthUseCasesModule {}
