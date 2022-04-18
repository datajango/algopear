import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CurrentController } from './current/current.controller';
import { PagePropsService } from './page-props/page-props.service';
import { NewsService } from './news/news.service';
import { NewsController } from './news/news.controller';

@Module({
  imports: [],
  controllers: [AppController, CurrentController, NewsController],
  providers: [AppService, PagePropsService, NewsService]
})
export class AppModule {}
