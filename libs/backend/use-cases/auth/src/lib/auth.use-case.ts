import { IDataService } from '@dto';
import {
  Injectable,
  NotFoundException,
  UnauthorizedException,
} from '@nestjs/common';

@Injectable()
export class AuthUseCases {
  constructor(private readonly dataService: IDataService) {}

  async signIn(email: string, pass: string): Promise<unknown> {
    const user = await this.dataService.users.findByEmail(email);

    if (!user || user.password !== pass) {
      throw new UnauthorizedException();
    }

    const { password, ...result } = user;

    return result;
  }
}
