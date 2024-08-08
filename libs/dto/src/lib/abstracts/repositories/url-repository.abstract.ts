import { CreateUrlDto } from "../../url/create.url.dto";
import { UpdateUrlDto } from "../../url/update.url.dto";
import { UrlDto } from "../../url/url.dto";

export abstract class IUrlRepository {
    abstract findAll(): Promise<UrlDto[]>
    abstract findById(id: number): Promise<UrlDto | null>;
    abstract create(createDto: CreateUrlDto): Promise<UrlDto>;
    abstract update(id: number, updateDto: UpdateUrlDto): Promise<UrlDto>;
    abstract deleteById(id: number): Promise<void>;

    abstract convertToDto(value: unknown): UrlDto;
}