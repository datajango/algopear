import { Injectable, StreamableFile } from '@nestjs/common';
import { CurrentResponse } from 'src/interfaces/current-response.interface';
import { createReadStream } from 'fs';
import { join } from 'path';

@Injectable()
export class PagePropsService {
    private response: CurrentResponse;

    public findAll() {
        const file = createReadStream(join(process.cwd(), './data', 'TSLA_current.json'));
        return new StreamableFile(file)
    }
}
