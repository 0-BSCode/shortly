import { Query, Parent, ResolveField, Resolver } from "@nestjs/graphql";
import { UrlOutput } from "./url.dto";
import { UrlUseCases } from "@url-use-cases";
import { UrlDto } from "@dto";

@Resolver(() => UrlOutput)
export class UrlResolver {
    constructor(private readonly urlUseCases: UrlUseCases) {

    }

    @ResolveField('_id', () => Number)
    async getUrlId(@Parent() parent: UrlDto) {
        return parent.id
    }

    @Query(() => [UrlOutput])
    async getAllUrls() {
        const records = await this.urlUseCases.fetchAllUrls();
        return records;
        // return records.map(this.convertToOutput)
    }

    convertToOutput(dto: UrlDto): UrlOutput {
        return {
            _id: dto.id,
            originalUrl: dto.originalUrl,
            shortenedUrl: dto.shortenedUrl,
            clicks: dto.clicks,
            createdAt: dto.createdAt
        }
    }
}
