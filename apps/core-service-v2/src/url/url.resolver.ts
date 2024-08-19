import {
  Query,
  Parent,
  ResolveField,
  Resolver,
  Mutation,
  Args,
} from '@nestjs/graphql';
import { UrlOutput } from './url.dto';
import { UrlUseCases } from '@url-use-cases';
import { UrlDto, UserDto } from '@dto';
import { UseGuards } from '@nestjs/common';
import { LocalAuthGuard } from '@services/auth-service';
import { CurrentUser } from '../user/user.dto';

@Resolver(() => UrlOutput)
export class UrlResolver {
  constructor(private readonly urlUseCases: UrlUseCases) {}

  @ResolveField('_id', () => Number)
  async getUrlId(@Parent() parent: UrlDto) {
    return parent.id;
  }

  @Query(() => [UrlOutput])
  async getAllUrls() {
    return this.urlUseCases.fetchAllUrls();
  }

  @Mutation(() => UrlOutput)
  async shortenUrl(@Args('url') url: string) {
    return this.urlUseCases.shortenUrl(url);
  }
}
