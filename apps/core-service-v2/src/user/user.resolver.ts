import { Mutation, Parent, ResolveField, Resolver } from '@nestjs/graphql';
import { UserOutput } from './user.dto';
import { AuthUseCases } from '@auth-use-cases';
import { UserDto } from '@dto';
import { Query } from '@nestjs/common';

@Resolver(() => UserOutput)
export class UserResolver {
  constructor(private readonly authUseCases: AuthUseCases) {}

  @ResolveField('_id', () => Number)
  async getUserId(@Parent() parent: UserDto) {
    return parent.id;
  }

  // @Query(() => UserOutput)
  // async
}
