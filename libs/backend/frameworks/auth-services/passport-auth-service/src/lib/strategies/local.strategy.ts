import { Injectable, UnauthorizedException } from '@nestjs/common';
import { Strategy } from 'passport-local';
import { PassportStrategy } from '@nestjs/passport';
import { IDataService } from '@dto';

@Injectable()
export class PassportLocalStrategy extends PassportStrategy(Strategy) {
  constructor(private dataService: IDataService) {
    super();
  }

  async validate(username: string, pass: string): Promise<any> {
    const user = await this.dataService.users.findByEmail(username);

    if (user && user.password === pass) {
      const { password, ...result } = user;
      return result;
    }

    throw new UnauthorizedException();
  }
}
