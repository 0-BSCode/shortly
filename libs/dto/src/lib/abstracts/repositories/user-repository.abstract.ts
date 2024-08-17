import { CreateUserDto } from '../../user/create.user.dto';
import { UpdateUserDto } from '../../user/update.user.dto';
import { UserDto } from '../../user/user.dto';

export abstract class IUserRepository {
  abstract findAll(): Promise<UserDto[]>;
  abstract findByEmail(email: string): Promise<UserDto | null>;
  abstract create(createDto: CreateUserDto): Promise<UserDto>;
  abstract update(id: number, updateDto: UpdateUserDto): Promise<UserDto>;
  abstract deleteById(id: number): Promise<void>;

  abstract convertToDto(value: unknown): UserDto;
}
