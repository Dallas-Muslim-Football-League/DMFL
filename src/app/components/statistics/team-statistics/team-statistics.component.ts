import { Component, OnInit } from '@angular/core';
import { StatisticService } from 'src/app/services/statistic.service';
import { CommonModule, Location } from '@angular/common';
import { TeamStatistics } from 'src/app/models/team-statistics';
import { FormsModule } from '@angular/forms';

@Component({
    selector: 'app-team-statistics',
    imports: [
        CommonModule,
        FormsModule
    ],
    templateUrl: './team-statistics.component.html',
    styleUrls: ['./team-statistics.component.css'],
})
export class TeamStatisticsComponent implements OnInit {
  teamStats: TeamStatistics[] = [];
  selectedCategory: string = 'passing';

  constructor(private statsService: StatisticService, private location: Location) { }

  ngOnInit(): void {
    this.getTeamStatistics();
  }

  getTeamStatistics(): void {
    this.statsService.getTeamStatistics()
      .subscribe(teamStats => this.teamStats = teamStats);
  }

  sortStats() {
      this.teamStats.sort((a: TeamStatistics, b: TeamStatistics) => {
        switch (this.selectedCategory) {
          case 'passing':
            return (b.passingYards ?? 0) - (a.passingYards ?? 0);
          case 'receiving':
            return (b.receivingYards ?? 0) - (a.receivingYards ?? 0);
          case 'defense':
            return (b.defensiveInterceptions ?? 0) - (a.defensiveInterceptions ?? 0);
          default:
            return 0;
        }
      });
    }

  goBack(): void {
    this.location.back();
  }
}
