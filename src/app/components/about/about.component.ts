import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-about',
  imports: [
    CommonModule
  ],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css',
})
export class AboutComponent implements OnInit {
    modalImageSrc: string = '';
    isModalOpen: boolean = false;
    public imageDir = environment.assetBasePath;
  
    constructor() { }
  
    ngOnInit(): void {
    }
}
