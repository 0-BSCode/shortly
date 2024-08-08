export abstract class IUrlService {
  abstract shortenLink(link: string): Promise<string>;
}
