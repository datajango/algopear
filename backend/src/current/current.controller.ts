import { Controller, Get, Req } from '@nestjs/common';
import { Request } from 'express';
import { PagePropsService } from '../page-props/page-props.service';

@Controller('current')
export class CurrentController {
    constructor(private readonly pagePropsService: PagePropsService) {}

    @Get()
    async getCurrent(@Req() request: Request) {
      const results = await this.pagePropsService.findAll();
      console.log('here');
      return results;
    }
}
