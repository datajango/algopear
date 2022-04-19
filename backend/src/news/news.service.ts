import { Injectable, StreamableFile } from '@nestjs/common';
import { NewsResponse } from 'src/interfaces/news-response.interface';
import { createReadStream, createWriteStream, readFile, readFileSync } from 'fs';
import { join } from 'path';

@Injectable()
export class NewsService {
    private response: NewsResponse;

    public findAll() {
        const filePath = join(process.cwd(), './data', 'TSLA_news.json');

        let  data = JSON.parse(readFileSync(filePath, 'utf8'));

        return data;
    }
}
