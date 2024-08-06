import { DrizzlePGConfig } from '@knaadh/nestjs-drizzle-pg/src/node-postgres.interface';
import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { schema } from './schema';

@Injectable()
export class DrizzleConfigService {
  constructor(private readonly configService: ConfigService) {}

  create(): DrizzlePGConfig {
    return {
      pg: {
        connection: 'client' as const,
        config: {
          connectionString: this.configService.get<string>('DATABASE_URL'),
        },
      },
      config: { schema: schema },
    };
  }
}
