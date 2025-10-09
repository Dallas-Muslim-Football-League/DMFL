import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { NewsItem } from 'src/app/models/news-item';
import { NewsService } from 'src/app/services/news.service';
import { NewsCardComponent } from '../../shared/news-card/news-card.component';

@Component({
  selector: 'app-news',
  imports: [
    CommonModule,
    NewsCardComponent
  ],
  templateUrl: './news.component.html',
  styleUrl: './news.component.css',
})
export class NewsComponent implements OnInit {
  newsItems: NewsItem[] = [];

  constructor(private newsService: NewsService) {}
  ngOnInit(): void {
    this.newsService.getNews().subscribe({
      next: (data) => {
        this.newsItems = data;
      },
      error: (err) => {
        console.error('Error fetching news', err);
      }
    });
  }
}
