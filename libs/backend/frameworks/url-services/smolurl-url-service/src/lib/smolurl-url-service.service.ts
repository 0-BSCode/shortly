import { IUrlService } from '@dto';
import { Injectable } from '@nestjs/common';

const API_URL = 'https://smolurl.com/api/links';

type ApiResponse = {
  data: {
    destination_url: string;
    short_url: string;
  };
};

@Injectable()
export class SmolurlUrlService implements IUrlService {
  async shortenLink(link: string): Promise<string> {
    const response = await fetch(API_URL, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ url: link }),
    });

    const data: ApiResponse = await response.json();

    return data.data.short_url;
  }
}
