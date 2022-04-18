import { Controller, Get, Req } from '@nestjs/common';
import { Request } from 'express';
import { PagePropsService } from '../page-props/page-props.service';

@Controller('current')
export class CurrentController {
    constructor(private readonly pagePropsService: PagePropsService) {}

    @Get()
    getCurrent(@Req() request: Request) {
      return this.pagePropsService.findAll()
    }
}
