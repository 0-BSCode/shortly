import { AuthUseCasesModule } from '@auth-use-cases';
import { Module } from '@nestjs/common';
import { UserResolver } from './user.resolver';

@Module({
  imports: [AuthUseCasesModule],
  providers: [UserResolver],
})
export class UserModule {}
