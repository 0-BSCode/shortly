import {
  Args,
  Mutation,
  Parent,
  ResolveField,
  Resolver,
} from '@nestjs/graphql';
import { CreateUserInput, UserOutput } from './user.dto';
import { AuthUseCases } from '@auth-use-cases';
import { CreateUserDto, UserDto } from '@dto';

@Resolver(() => UserOutput)
export class UserResolver {
  constructor(private readonly authUseCases: AuthUseCases) {}

  @ResolveField('_id', () => Number)
  async getUserId(@Parent() parent: UserDto) {
    return parent.id;
  }

  @Mutation(() => UserOutput)
  async signUp(@Args('createUserInput') createUserInput: CreateUserInput) {
    const dto = new CreateUserDto();
    dto.email = createUserInput.email;
    dto.password = createUserInput.password;
    return this.authUseCases.signUp(dto);
  }
}
