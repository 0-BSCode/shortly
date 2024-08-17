import { IUrlRepository } from '../repositories/url-repository.abstract';
import { IUserRepository } from '../repositories/user-repository.abstract';

export abstract class IDataService {
  abstract urls: IUrlRepository;
  abstract users: IUserRepository;
}
