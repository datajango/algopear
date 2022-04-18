import { StockPosition } from "./stock-position.interface";

export interface StockSymbol {
    name: string;
    ticker: string;
    timeFrame: string;
    previousClose: number;    
    filteredAgg: Array<StockPosition>;
}