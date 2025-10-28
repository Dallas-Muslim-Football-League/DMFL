import { Season } from "./season";

export interface NewsItem {
  id: number;
  title: string;
  content: string;
  imageUrl: string;
  datePublished: Date;
  author: string;
  season: Season;
}