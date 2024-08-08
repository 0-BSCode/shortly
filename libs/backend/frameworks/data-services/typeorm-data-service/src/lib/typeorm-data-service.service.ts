import { IDataService, IUrlRepository } from '@dto';
import { Injectable, OnApplicationBootstrap } from '@nestjs/common';
import { TypeormUrlRepository } from './repositories/typeorm-url.repository';

@Injectable()
export class TypeormDataService
  implements IDataService, OnApplicationBootstrap
{
  urls: IUrlRepository;

  constructor(private readonly urlRepository: TypeormUrlRepository) {}

  onApplicationBootstrap() {
    this.urls = this.urlRepository;
  }
}
