import { AuthUseCasesModule } from '@auth-use-cases';
import { Module } from '@nestjs/common';
import { AuthResolver } from './auth.resolver';

@Module({
  imports: [AuthUseCasesModule],
  providers: [AuthResolver],
})
export class AuthModule {}
