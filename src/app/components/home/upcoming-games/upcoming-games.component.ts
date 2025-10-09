import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Game } from 'src/app/models/game';
import { ScheduleService } from 'src/app/services/schedule.service';
import { GameCardComponent } from '../../shared/game-card/game-card.component';
   // The nested Game interface

@Component({
  selector: 'app-upcoming-games',
  standalone: true,
  imports: [
    CommonModule,
    GameCardComponent
  ],
  templateUrl: './upcoming-games.component.html',
  styleUrls: ['./upcoming-games.component.css']
})
export class UpcomingGamesComponent implements OnInit {
  // This property will now hold an array of Game objects
  upcomingGames: Game[] = [];
  isLoading = true;

  constructor(private scheduleService: ScheduleService) {}

  ngOnInit(): void {
    this.scheduleService.getSchedule().subscribe({
      next: (fullSchedule) => {
        // Find the single week object where 'current' is true
        const currentWeek = fullSchedule.find(week => week.current === true);

        // If a current week was found, assign its 'games' array
        if (currentWeek) {
          this.upcomingGames = currentWeek.games;
          // Sort the games by date
          this.upcomingGames.sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime());
        }
        
        this.isLoading = false;
      },
      error: (err) => {
        console.error('Error fetching schedule', err);
        this.isLoading = false;
      }
    });
  }
}