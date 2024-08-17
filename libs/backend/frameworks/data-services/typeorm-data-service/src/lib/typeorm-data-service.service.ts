import { IDataService, IUrlRepository, IUserRepository } from '@dto';
import { Injectable, OnApplicationBootstrap } from '@nestjs/common';
import { TypeormUrlRepository } from './repositories/typeorm-url.repository';
import { TypeormUserRepository } from './repositories/typeorm-user.repository';

@Injectable()
export class TypeormDataService
  implements IDataService, OnApplicationBootstrap
{
  urls: IUrlRepository;
  users: IUserRepository;

  constructor(
    private readonly urlRepository: TypeormUrlRepository,
    private readonly userRepository: TypeormUserRepository
  ) {}

  onApplicationBootstrap() {
    this.urls = this.urlRepository;
    this.users = this.userRepository;
  }
}
