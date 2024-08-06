import { Injectable } from '@nestjs/common';
import { CreateUrlDto, IUrlRepository, UpdateUrlDto, UrlDto } from '@dto';
import { NodePgDatabase } from 'drizzle-orm/node-postgres';
import { schema, UrlDrizzleDataType } from '../schema';
import { eq } from 'drizzle-orm';

@Injectable()
export class DrizzleUrlRepository implements IUrlRepository {
  private readonly table = schema.urlsTable;
  constructor(private readonly dbService: NodePgDatabase<typeof schema>) {}

  async findById(id: number): Promise<UrlDto> {
    const record = await this.dbService
      .select()
      .from(this.table)
      .where(eq(this.table.id, id))
      .execute();

    return this.convertToDto(record[0]);
  }

  async create(createDto: CreateUrlDto): Promise<UrlDto> {
    const record = await this.dbService
      .insert(this.table)
      .values({
        originalUrl: createDto.originalUrl,
      })
      .returning();

    return this.convertToDto(record[0]);
  }

  async update(id: number, updateDto: UpdateUrlDto): Promise<UrlDto> {
    const record = await this.dbService
      .update(this.table)
      .set({
        originalUrl: updateDto.originalUrl,
      })
      .where(eq(this.table.id, id))
      .returning();

    return this.convertToDto(record[0]);
  }

  async deleteById(id: number): Promise<void> {
    await this.dbService
      .delete(this.table)
      .where(eq(this.table.id, id))
      .execute();
  }

  convertToDto(value: UrlDrizzleDataType): UrlDto {
    return {
      id: value.id,
      originalUrl: value.originalUrl,
      createdAt: new Date(value.createdAt),
      clicks: value.clicks,
    };
  }
}
