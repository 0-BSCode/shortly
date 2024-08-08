import { IUrlRepository } from '../repositories/url-repository.abstract';

export abstract class IDataService {
  abstract urls: IUrlRepository;
}
