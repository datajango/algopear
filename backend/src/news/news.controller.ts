import { Controller, Get, Req } from '@nestjs/common';
import { Request } from 'express';
import { NewsService } from './news.service';

@Controller('news')
export class NewsController {
    constructor(private readonly newsService: NewsService) {}

    @Get()
    getCurrent(@Req() request: Request) {
      return this.newsService.findAll()
    }
}