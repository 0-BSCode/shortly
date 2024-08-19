import { Module } from '@nestjs/common';
import { PassportAuthServiceModule } from '@passport-auth-service';
import { JwtModule } from '@nestjs/jwt';
import { ConfigService } from '@nestjs/config';

@Module({
  imports: [
    PassportAuthServiceModule,
    JwtModule.registerAsync({
      inject: [ConfigService],
      useFactory: (config: ConfigService) => ({
        secret: config.get<string>('JWT_SECRET'),
        signOptions: {
          expiresIn: config.get<string>('JWT_EXPIRY'),
        },
      }),
    }),
  ],
  exports: [PassportAuthServiceModule, JwtModule],
})
export class AuthServiceModule {}
