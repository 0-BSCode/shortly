import { CreateUrlDto, IDataService, IUrlService, UrlDto } from '@dto';
import { Injectable } from '@nestjs/common';

@Injectable()
export class UrlUseCases {
  constructor(
    private readonly dataService: IDataService,
    private readonly urlService: IUrlService
  ) {}
  async shortenUrl(url: string): Promise<UrlDto> {
    const shortenedUrl = await this.urlService.shortenLink(url);

    const createDto: CreateUrlDto = {
      originalUrl: url,
      shortenedUrl,
      clicks: 0,
    };

    const response = await this.dataService.urls.create(createDto);

    return response;
  }

  async fetchAllUrls(): Promise<UrlDto[]> {
    const response = await this.dataService.urls.findAll();

    return response;
  }
}
