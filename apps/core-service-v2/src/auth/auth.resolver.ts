import { UseGuards } from '@nestjs/common';
import { Args, Mutation, Resolver } from '@nestjs/graphql';
import { LocalAuthGuard } from '@services/auth-service';
import { LoginOutput, LoginInput } from './auth.dto';
import { AuthUseCases } from '@auth-use-cases';

@Resolver()
export class AuthResolver {
  constructor(private readonly authUseCases: AuthUseCases) {}

  @UseGuards(LocalAuthGuard)
  @Mutation(() => LoginOutput)
  async signIn(
    @Args('loginUserInput') loginUserInput: LoginInput
  ): Promise<LoginOutput> {
    const response = await this.authUseCases.signIn(loginUserInput.email);
    return {
      token: response.token,
      email: response.email,
    };
  }
}
