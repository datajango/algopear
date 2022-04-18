import { StockPosition } from "./stock-position.interface";

export interface PageProps {
    name: string;
    ticker: string;
    timeFrame: string;
    previousClose: number;    
    filteredAgg: Array<StockPosition>;
    staticPrice: number,
    open: number,
    close: number,
    high: number,
    low: number,
    volume: number,
    avgVolume: number,
    market: string
}