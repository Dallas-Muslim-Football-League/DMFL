import { CommonModule } from '@angular/common';
import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { environment } from 'src/environments/environment';
import { NewsComponent } from './news/news.component';
import { LatestScoresComponent } from './latest-scores/latest-scores.component';
import { StatLeaderCardComponent } from '../shared/stat-leader-card/stat-leader-card.component';
import { PhotoGalleryComponent } from '../shared/photo-gallery/photo-gallery.component';
import { UpcomingGamesComponent } from "./upcoming-games/upcoming-games.component";

@Component({
    selector: 'app-home',
    imports: [
    CommonModule,
    NewsComponent,
    LatestScoresComponent,
    StatLeaderCardComponent,
    PhotoGalleryComponent,
    UpcomingGamesComponent
],
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  modalImageSrc: string = '';
  isModalOpen: boolean = false;
  public imageDir = environment.assetBasePath;

  constructor() { }

  ngOnInit(): void {
  }

  openModal(imageSrc: string): void {
    console.log('openModal called with:', this.imageDir + imageSrc);
    this.modalImageSrc = this.imageDir + imageSrc;
    this.isModalOpen = true;
    console.log('modalImageSrc:', this.modalImageSrc);
    console.log('isModalOpen:', this.isModalOpen);
  }

  closeModal(): void {
    this.isModalOpen = false;
  }
}
