import { Injectable } from '@nestjs/common';
import { PassportJwtAuthGuard } from '@passport-auth-service';

@Injectable()
export class JwtAuthGuard extends PassportJwtAuthGuard {}
