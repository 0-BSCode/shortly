import { CreateUrlDto, IDataService, UrlDto } from '@dto';
import { Injectable } from '@nestjs/common';

@Injectable()
export class UrlUseCases {
    constructor(private readonly dataService: IDataService) {}
    async shortenUrl(url: string): Promise<UrlDto> {

        const createDto: CreateUrlDto = {
            originalUrl: url,
            shortenedUrl: url,
        }

        const response = await this.dataService.urls.create(createDto)

        return response;
    }
}
