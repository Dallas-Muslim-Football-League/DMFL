import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  modalImageSrc: string = '';
  isModalOpen: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  openModal(imageSrc: string): void {
    console.log('openModal called with:', imageSrc);
    this.modalImageSrc = imageSrc;
    this.isModalOpen = true;
    console.log('modalImageSrc:', this.modalImageSrc);
    console.log('isModalOpen:', this.isModalOpen);
  }

  closeModal(): void {
    this.isModalOpen = false;
  }
}
