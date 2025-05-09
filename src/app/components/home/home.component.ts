import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css'],
    standalone: false
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
