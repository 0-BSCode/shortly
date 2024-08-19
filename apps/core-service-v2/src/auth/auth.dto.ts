import { Field, InputType, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class LoginOutput {
  @Field()
  token: string;

  @Field()
  email: string;
}

@InputType()
export class LoginInput {
  @Field()
  email: string;

  @Field()
  password: string;
}
