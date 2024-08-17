import { Test } from '@nestjs/testing';
import { AuthUseCases } from './auth.use-case';

describe('AuthUseCases', () => {
  let service: AuthUseCases;

  beforeEach(async () => {
    const module = await Test.createTestingModule({
      providers: [AuthUseCases],
    }).compile();

    service = module.get(AuthUseCases);
  });

  it('should be defined', () => {
    expect(service).toBeTruthy();
  });
});
