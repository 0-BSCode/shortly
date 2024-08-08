import { Body, Controller, Get, Post } from "@nestjs/common";
import { UrlUseCases } from "@url-use-cases";

@Controller('url')
export class UrlController {
    constructor(private readonly urlUseCases: UrlUseCases) {}
    @Post()
    shorten(@Body() url: string) {
        return this.urlUseCases.shortenUrl(url)
    }

    @Get()
    getAll() {
        return this.urlUseCases.fetchAllUrls();
    }
}