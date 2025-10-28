import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { PhotoCardComponent } from '../photo-card/photo-card.component';
import { Photo } from 'src/app/models/photo';
import { PhotoService } from 'src/app/services/photo.service';

@Component({
  selector: 'app-photo-gallery',
  imports: [
    CommonModule,
    PhotoCardComponent
  ],
  templateUrl: './photo-gallery.component.html',
  styleUrl: './photo-gallery.component.css'
})
export class PhotoGalleryComponent implements OnInit {
  // This array now holds your gallery data
  photos: Photo[] = [];

  // Properties to manage the modal state
  isModalOpen = false;
  modalImageUrl = '';
  
  constructor(private photoService: PhotoService) {}

  ngOnInit(): void {
    this.photoService.getPhotos().subscribe((data: Photo[]) => {
      this.photos = data;
    });
  }

  // This function will be called when a photo card is clicked
  openModal(photo: Photo) {
    this.modalImageUrl = photo.imageUrl;
    this.isModalOpen = true;
  }

  // This function closes the modal
  closeModal() {
    this.isModalOpen = false;
    this.modalImageUrl = '';
  }
}
