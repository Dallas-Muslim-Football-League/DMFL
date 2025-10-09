import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { NewsItem } from 'src/app/models/news-item';

@Component({
  selector: 'app-news-card',
  imports: [
    CommonModule
  ],
  templateUrl: './news-card.component.html',
  styleUrl: './news-card.component.css'
})
export class NewsCardComponent {
  @Input() item!: NewsItem;
}
