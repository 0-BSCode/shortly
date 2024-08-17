import { CreateUserDto, IUserRepository, UpdateUserDto, UserDto } from '@dto';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from '../schema/user.schema';
import { Repository } from 'typeorm';

@Injectable()
export class TypeormUserRepository implements IUserRepository {
  constructor(
    @InjectRepository(User)
    private readonly repository: Repository<User>
  ) {}

  async findAll(): Promise<UserDto[]> {
    const records = await this.repository.find();
    return records.map(this.convertToDto);
  }

  async findByEmail(email: string): Promise<UserDto | null> {
    const record = await this.repository.findOne({
      where: {
        email,
      },
    });

    if (!record) {
      return null;
    }

    return this.convertToDto(record);
  }

  async create(createDto: CreateUserDto): Promise<UserDto> {
    const newRecord = new User();

    newRecord.email = createDto.email;
    // TODO: Hash password
    newRecord.password = createDto.password;

    const record = await this.repository.save(newRecord);
    return this.convertToDto(record);
  }

  async update(id: number, updateDto: UpdateUserDto): Promise<UserDto> {
    const updatedRecord = new User();
    updatedRecord.id = id;

    if (updateDto.email) {
      updatedRecord.email = updateDto.email;
    }

    if (updateDto.password) {
      updatedRecord.password = updateDto.password;
    }

    const record = await this.repository.save(updatedRecord);
    return this.convertToDto(record);
  }

  async deleteById(id: number): Promise<void> {
    await this.repository.delete(id);
  }

  convertToDto(value: User): UserDto {
    return {
      id: value.id,
      email: value.email,
      password: value.password,
      createdAt: value.createdAt,
    };
  }
}
