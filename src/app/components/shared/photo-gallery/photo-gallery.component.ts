import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { PhotoCardComponent } from '../photo-card/photo-card.component';
import { LocalPhoto } from 'src/app/models/local-photo';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-photo-gallery',
  imports: [
    CommonModule,
    PhotoCardComponent
  ],
  templateUrl: './photo-gallery.component.html',
  styleUrl: './photo-gallery.component.css'
})
export class PhotoGalleryComponent {
    // This is the base path to your images in the 'assets' folder
  imageDir = environment.assetBasePath;

  // This array now holds your gallery data
  photos: LocalPhoto[] = [
    { filename: '/2025-spring-group.JPG', caption: '2025 Spring Group Photo' },
    { filename: '/2024-spring-champs.JPG', caption: '2024 Spring League Champions' },
    { filename: '/2023-summer-champs.JPG', caption: '2023 Summer League Champions' },
    { filename: '/free-palestine-2024.JPG', caption: 'Free Palestine 2024' },
    { filename: '/underdogs-2023.JPG', caption: 'The Underdogs 2023' }
  ];

  // Properties to manage the modal state
  isModalOpen = false;
  modalImageUrl = '';

  // This function will be called when a photo card is clicked
  openModal(photo: LocalPhoto) {
    this.modalImageUrl = this.imageDir + photo.filename;
    this.isModalOpen = true;
  }

  // This function closes the modal
  closeModal() {
    this.isModalOpen = false;
    this.modalImageUrl = '';
  }
}
