import { IDataService, IUrlRepository } from "@dto";
import { Injectable, OnApplicationBootstrap } from "@nestjs/common";
import { DrizzleUrlRepository } from "./repositories/drizzle-url.repository";

@Injectable()
export class DrizzleDataService implements IDataService, OnApplicationBootstrap {
    urls: IUrlRepository;

    constructor(private readonly urlRepository: DrizzleUrlRepository) {}

    onApplicationBootstrap() {
        this.urls = this.urlRepository
    }
}