import { Controller, Get } from '@nestjs/common';

import { AppService } from './app.service';
import path from 'path';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getData() {
    console.log(path.join(__dirname, "../"))
    return this.appService.getData();
  }
}
