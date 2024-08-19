import { Injectable, UnauthorizedException } from '@nestjs/common';
import { Strategy } from 'passport-local';
import { PassportStrategy } from '@nestjs/passport';
import { IDataService } from '@dto';

@Injectable()
export class PassportLocalStrategy extends PassportStrategy(Strategy) {
  constructor(private dataService: IDataService) {
    super({
      usernameField: 'email',
    });
  }

  async validate(email: string, pass: string): Promise<any> {
    const user = await this.dataService.users.findByEmail(email);

    if (user && user.password === pass) {
      const { password, ...result } = user;
      return result;
    } else {
      throw new UnauthorizedException();
    }
  }
}
