import { Injectable } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";
import { TypeOrmModuleOptions, TypeOrmOptionsFactory } from "@nestjs/typeorm";
import path = require("path");
import { Url } from "./schema/url.schema";

@Injectable()
export class TypeOrmConfigService implements TypeOrmOptionsFactory {
    constructor(private readonly configService: ConfigService) {}
    createTypeOrmOptions(): Promise<TypeOrmModuleOptions> | TypeOrmModuleOptions {
        console.log(path.join(__dirname, 'schema', '*.schema.ts'))
        return {
            type: 'postgres',
            url: this.configService.get<string>('DATABASE_URL'),
            // Remove in production
            synchronize: true,
            entities: [Url],
        }
    }
}