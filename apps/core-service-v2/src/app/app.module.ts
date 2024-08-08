import { Module } from '@nestjs/common';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { UrlModule } from '../url/url.module';
import { ConfigServicesModule } from '@services';
import path from 'path';

@Module({
  imports: [
    ConfigServicesModule,
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: path.join(__dirname, '..', 'gql/schema.gql'),
    }),
    UrlModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
