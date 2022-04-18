import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CurrentController } from './current/current.controller';
import { PagePropsService } from './page-props/page-props.service';

@Module({
  imports: [],
  controllers: [AppController, CurrentController],
  providers: [AppService, PagePropsService]
})
export class AppModule {}
