import {PickType} from '@nestjs/mapped-types';
import { UrlDto } from './url.dto';

export class CreateUrlDto extends PickType(UrlDto, ["originalUrl"]) {}