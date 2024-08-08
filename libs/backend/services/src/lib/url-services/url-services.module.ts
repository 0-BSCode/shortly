import { Module } from "@nestjs/common";
import { SmolurlUrlServiceModule } from "@smolurl-url-service";

@Module({
    imports: [
        SmolurlUrlServiceModule
    ],
    exports: [
        SmolurlUrlServiceModule
    ]
})
export class UrlServicesModule {}