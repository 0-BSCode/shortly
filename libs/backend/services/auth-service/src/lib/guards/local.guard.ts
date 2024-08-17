import { Injectable } from '@nestjs/common';
import { PassportLocalAuthGuard } from '@passport-auth-service';

// Just maps it so that app service doesn't depend directly on implementation
@Injectable()
export class LocalAuthGuard extends PassportLocalAuthGuard {}
