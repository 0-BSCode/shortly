import { Field, InputType, ObjectType, PartialType } from "@nestjs/graphql";


@ObjectType()
export class UrlOutput {
    @Field()
    _id: number

    @Field()
    originalUrl: string

    @Field()
    shortenedUrl: string

    @Field()
    clicks: number

    @Field(() => Date)
    createdAt: Date
}

@InputType()
export class CreateUrlInput {
    url: string
}

@InputType()
export class UpdateUrlInput extends PartialType(CreateUrlInput) {
    @Field()
    _id: number
}