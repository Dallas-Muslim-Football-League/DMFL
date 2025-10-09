import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { LocalPhoto } from 'src/app/models/local-photo';

@Component({
  selector: 'app-photo-card',
  imports: [
    CommonModule
  ],
  templateUrl: './photo-card.component.html',
  styleUrl: './photo-card.component.css'
})
export class PhotoCardComponent {
  // Input to receive the specific photo's data (filename and caption)
  @Input() photo!: LocalPhoto;
  // Input to receive the base path to the images folder
  @Input() imageDir!: string;

  // Output to notify the parent component that this card was clicked
  @Output() cardClicked = new EventEmitter<LocalPhoto>();

  // This function is called by the (click) event in the template
  onCardClick(): void {
    // It emits the photo data, which the parent gallery can listen for
    this.cardClicked.emit(this.photo);
  }
}
