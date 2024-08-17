import { Field, InputType, ObjectType, PartialType } from '@nestjs/graphql';

@ObjectType()
export class UserOutput {
  @Field()
  _id: number;

  @Field()
  email: string;

  @Field(() => Date)
  createdAt: Date;
}

@InputType()
export class CreateUserInput {
  @Field()
  email: string;

  @Field()
  password: string;
}

@InputType()
export class UpdateUrlInput extends PartialType(CreateUserInput) {
  @Field()
  _id: number;
}
