import {OmitType} from '@nestjs/mapped-types';
import { UrlDto } from './url.dto';

export class CreateUrlDto extends OmitType(UrlDto, ["id"]) {}