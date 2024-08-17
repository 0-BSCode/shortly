import { Module } from '@nestjs/common';
import { DataServiceModule } from '@services/data-service';
import { AuthUseCases } from './auth.use-case';

@Module({
  imports: [DataServiceModule],
  providers: [AuthUseCases],
  exports: [AuthUseCases],
})
export class AuthUseCasesModule {}
