import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GameCardComponent } from '../../shared/game-card/game-card.component';
import { ScheduleService } from 'src/app/services/schedule.service';
import { Game } from 'src/app/models/game';


@Component({
  selector: 'app-latest-scores',
  standalone: true,
  // Make sure to import your reusable GameCardComponent
  imports: [CommonModule, GameCardComponent],
  templateUrl: './latest-scores.component.html',
  styleUrls: ['./latest-scores.component.css']
})
export class LatestScoresComponent implements OnInit {
  latestGames: Game[] = [];
  weekTitle: string = '';
  isLoading = true;

  constructor(private scheduleService: ScheduleService) {}

  ngOnInit(): void {
    this.scheduleService.getSchedule().subscribe({
      next: (fullSchedule) => {
        // 1. Filter for past regular season weeks that have scores
        const completedWeeks = fullSchedule.filter(week =>
          !week.current &&
          !week.playoff &&
          week.games.some(game => game.homeScore > 0 || game.awayScore > 0)
        );

        // 2. Sort the completed weeks to find the most recent one
        completedWeeks.sort((a, b) => {
          const weekA = parseInt(a.week.split(' ')[1]);
          const weekB = parseInt(b.week.split(' ')[1]);
          return weekB - weekA; // Sort in descending order (Week 5, Week 4, etc.)
        });

        // 3. Take the first week from the sorted list
        if (completedWeeks.length > 0) {
          const latestWeek = completedWeeks[0];
          this.latestGames = latestWeek.games;
          this.weekTitle = latestWeek.week; // e.g., "Week 5"

          // ADD THIS LINE TO SORT THE GAMES BY DATE
          this.latestGames.sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime());
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