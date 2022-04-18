import { NewsItem } from "./news-item.interface";

export interface NewsResponse {
    results: Array<NewsItem>;
	status: string;
	request_id: string;
	count: number,
	next_url: string;    
}
