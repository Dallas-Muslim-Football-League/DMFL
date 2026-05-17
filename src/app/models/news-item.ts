import { Season } from "./season";

export interface NewsItem {
  id: number;
  title: string;
  content: string;
  imageUrl: string;
  datePosted: Date;
  author: string;
  season: Season;
}