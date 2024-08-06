import { Test } from '@nestjs/testing';
import { UrlUseCases } from './url.use-case';

describe('UrlUseCases', () => {
  let service: UrlUseCases;

  beforeEach(async () => {
    const module = await Test.createTestingModule({
      providers: [UrlUseCases],
    }).compile();

    service = module.get(UrlUseCases);
  });

  it('should be defined', () => {
    expect(service).toBeTruthy();
  });
});
