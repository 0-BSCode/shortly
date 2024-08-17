import { AuthUseCasesModule } from '@auth-use-cases';
import { Module } from '@nestjs/common';

@Module({
  imports: [AuthUseCasesModule],
})
export class UserModule {}
