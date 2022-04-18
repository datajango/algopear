import { NewsPublisher } from "./news-publisher.interface";

export interface NewsItem {
    id: string;
    publisher: NewsPublisher;
    title: string;
    author: string;
    published_utc: string;
    article_url: string;
    tickers: Array<string>;
    image_url: string;
    description: string;
    keywords: Array<string>;
}
