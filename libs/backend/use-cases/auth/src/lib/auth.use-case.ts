import { CreateUserDto, IDataService, SigninAuthDto, UserDto } from '@dto';
import {
  BadRequestException,
  Injectable,
  InternalServerErrorException,
  NotFoundException,
} from '@nestjs/common';

@Injectable()
export class AuthUseCases {
  constructor(private readonly dataService: IDataService) {}

  async signIn(email: string): Promise<SigninAuthDto> {
    const user = await this.dataService.users.findByEmail(email);

    if (!user) {
      throw new NotFoundException();
    }

    const { password, ...result } = user;

    return {
      token: 'jwt',
      email: result.email,
    };
  }

  async signUp(createUserDto: CreateUserDto): Promise<UserDto> {
    try {
      const response = await this.dataService.users.create(createUserDto);
      return response;
    } catch (error) {
      if (error instanceof Error) {
        throw new BadRequestException(error.message);
      }

      throw new InternalServerErrorException('Unable to create user record');
    }
  }
}
