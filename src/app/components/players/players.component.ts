import { Component, OnInit } from '@angular/core';
import { Player } from '../../models/player';

@Component({
    selector: 'app-players',
    templateUrl: './players.component.html',
    styleUrls: ['./players.component.css'],
    standalone: false
})
export class PlayersComponent implements OnInit {
  players: Player[] = [];

  constructor() { }

  ngOnInit(): void {
  }

}
