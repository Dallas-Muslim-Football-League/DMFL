import { Injectable } from '@angular/core';
import { NewsItem } from '../models/news-item';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NewsService {

  private mockNews = [];

  getNews(): Observable<NewsItem[]> {
    return of(this.mockNews);
  }

  constructor() { }
}
