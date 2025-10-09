import { Injectable } from '@angular/core';
import { NewsItem } from '../models/news-item';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NewsService {

  private mockNews = [
    // {
    //   title: 'Season Kickoff',
    //   date: '2024-06-01',
    //   summary: 'The new season kicks off with exciting matchups!',
    //   imageUrl: 'assets/news/season-kickoff.jpg'
    // },
    // {
    //   title: 'Midseason Update',
    //   date: '2024-07-15',
    //   summary: 'A look at the standings and key players halfway through the season.',
    //   imageUrl: 'assets/news/midseason-update.jpg'
    // },
    // {
    //   title: 'Playoff Preview',
    //   date: '2024-08-20',
    //   summary: 'Previewing the teams and players to watch in the upcoming playoffs.',
    //   imageUrl: 'assets/news/playoff-preview.jpg'
    // }
  ];

  getNews(): Observable<NewsItem[]> {
    return of(this.mockNews);
  }

  constructor() { }
}
