import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Game } from 'src/app/models/game';

@Component({
  selector: 'app-game-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './game-card.component.html',
  styleUrls: ['./game-card.component.css']
})
export class GameCardComponent {
  // This 'Input' is the "mail slot" for the parent to pass a single game object into this component.
  @Input() game!: Game;
}