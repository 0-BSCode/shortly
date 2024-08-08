import { Injectable } from '@nestjs/common';
import { CreateUrlDto, IUrlRepository, UpdateUrlDto, UrlDto } from '@dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Url } from '../schema/url.schema';
import { Repository } from 'typeorm';

@Injectable()
export class TypeormUrlRepository implements IUrlRepository {
  constructor(
    @InjectRepository(Url)
    private readonly repository: Repository<Url>
  ) {}

  async findAll(): Promise<UrlDto[]> {
    const records = await this.repository.find();
    return records.map(this.convertToDto);
  }

  async findById(id: number): Promise<UrlDto | null> {
    const record = await this.repository.findOne({
      where: {
        id,
      },
    });

    if (!record) {
      return null;
    }

    return this.convertToDto(record);
  }

  async create(createDto: CreateUrlDto): Promise<UrlDto> {
    const newRecord = new Url();

    newRecord.originalUrl = createDto.originalUrl;
    newRecord.shortenedUrl = createDto.shortenedUrl;

    return await this.repository.save(newRecord);
  }

  async update(id: number, updateDto: UpdateUrlDto): Promise<UrlDto> {
    const updatedRecord = new Url();

    updatedRecord.id = id;

    if (updateDto.originalUrl) {
      updatedRecord.originalUrl = updateDto.originalUrl;
    }

    if (updateDto.shortenedUrl) {
      updatedRecord.shortenedUrl = updateDto.shortenedUrl;
    }

    if (updateDto.clicks) {
      updatedRecord.clicks = updateDto.clicks;
    }

    return await this.repository.save(updatedRecord);
  }

  async deleteById(id: number): Promise<void> {
    await this.repository.delete(id);
  }

  convertToDto(value: Url): UrlDto {
    return {
      id: value.id,
      originalUrl: value.originalUrl,
      shortenedUrl: value.shortenedUrl,
      createdAt: value.createdAt,
      clicks: value.clicks,
    };
  }
}
