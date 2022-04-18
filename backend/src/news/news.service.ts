import { Injectable, StreamableFile } from '@nestjs/common';
import { createReadStream } from 'fs';
import { join } from 'path';
import { NewsResponse } from 'src/interfaces/news-response.interface';

@Injectable()
export class NewsService {
    private response: NewsResponse;

    public findAll() {
        const file = createReadStream(join(process.cwd(), './data', 'TSLA_news.json'));
        return new StreamableFile(file)
    }
}
