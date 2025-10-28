import { Season } from "./season";

export interface Photo {
  id: number;
  title: string;
  caption: string;
  imageUrl: string;
  dateUploaded: Date;
  season: Season | null;
}