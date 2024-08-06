import { CreateUrlDto } from "../../url/create.url.dto";
import { UpdateUrlDto } from "../../url/update.url.dto";
import { UrlDto } from "../../url/url.dto";

export abstract class IUrlRepository {
    abstract findById(id: number): Promise<UrlDto>;
    abstract create(createDto: CreateUrlDto): Promise<UrlDto>;
    abstract update(id: number, updateDto: UpdateUrlDto): Promise<UrlDto>;
    abstract deleteById(id: number): Promise<void>;

    abstract convertToDto(value: unknown): UrlDto;
}