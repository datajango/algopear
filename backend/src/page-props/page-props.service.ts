import { Injectable, StreamableFile } from '@nestjs/common';
import { CurrentResponse } from 'src/interfaces/current-response.interface';
import { createReadStream, createWriteStream, readFile, readFileSync } from 'fs';
import { join } from 'path';
import { Transform } from 'stream';

@Injectable()
export class PagePropsService {
    private response: CurrentResponse;

    public async findAll() {

        let filePath = join(process.cwd(), './data', 'TSLA_current.json');
        
        let  data = JSON.parse(readFileSync(filePath, 'utf8'));

        // Stock Header with ticker, name, close price, percentage change 
        // whether positive or negative, and dollar amount change from TSLA_current.json. 
        // Note: the percentage change is caluculated as follows: ((close - previousClose) * .10)
        
        let transformed = {};
        
        transformed = {
          name: data.pageProps.name,
          symbol: data.pageProps.ticker,
          previousClose: data.pageProps.previousClose,
          staticPrice: data.pageProps.staticPrice,
          open: data.pageProps.open,
          close: data.pageProps.close,
          high: data.pageProps.high,
          low: data.pageProps.low,
          volume: data.pageProps.volume,
          avgVolume: data.pageProps.avgVolume,
          market: data.pageProps.market,
          percentageChange: (( data.pageProps.close - data.pageProps.previousClose) * .10).toFixed(2)
        };

        transformed['data'] =  data.pageProps.filteredAgg;

        return transformed;
    }
}
