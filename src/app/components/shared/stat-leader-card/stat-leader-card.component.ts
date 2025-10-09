import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { PlayerStatistics } from 'src/app/models/player-statistics';
import { StatisticService } from 'src/app/services/statistic.service';

@Component({
  selector: 'app-stat-leader-card',
  imports: [
    CommonModule
  ],
  templateUrl: './stat-leader-card.component.html',
  styleUrl: './stat-leader-card.component.css'
})
export class StatLeaderCardComponent implements OnInit {
  @Input() statCategory!: 'passing' | 'rushing' | 'receiving';

  leaders: PlayerStatistics[] = []
  isLoading: boolean = true;

  constructor(private statsService: StatisticService) { }

  ngOnInit() {
    this.statsService.getPlayerStatistics().subscribe({
      next: (allStats) => {
        if (this.statCategory === 'passing') {
          this.leaders = allStats.sort((a, b) => b.passingYards - a.passingYards).slice(0, 3);
        } else if (this.statCategory === 'rushing') {
          this.leaders = allStats.sort((a, b) => b.rushingYards - a.rushingYards).slice(0, 3);
        } else if (this.statCategory === 'receiving') {
          this.leaders = allStats.sort((a, b) => b.receivingYards - a.receivingYards).slice(0, 3);
        }
      },
      error: (err) => {
        console.error('Error fetching player statistics', err);
      },
      complete: () => {
        this.isLoading = false;
      }
    });
  }
}
