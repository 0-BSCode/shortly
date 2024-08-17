import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { UrlModule } from '../url/url.module';
import { ConfigServiceModule } from '@services/config-service';
import path from 'path';
import { AppResolver } from './app.resolver';
import { AuthServiceModule } from '@services/auth-service';

@Module({
  imports: [
    ConfigServiceModule,
    AuthServiceModule,
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: path.join(__dirname, '..', 'gql/schema.gql'),
    }),
    UrlModule,
  ],
  providers: [AppResolver],
})
export class AppModule {}
