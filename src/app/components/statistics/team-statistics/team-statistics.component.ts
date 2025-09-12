import { Component, OnInit } from '@angular/core';
import { StatisticService } from 'src/app/services/statistic.service';
import { Location } from '@angular/common';

@Component({
    selector: 'app-team-statistics',
    templateUrl: './team-statistics.component.html',
    styleUrls: ['./team-statistics.component.css'],
    standalone: false
})
export class TeamStatisticsComponent implements OnInit {
  teamStats: any;

  constructor(private statsService: StatisticService, private location: Location) { }

  ngOnInit(): void {
    this.getTeamStatistics();
  }

  getTeamStatistics(): void {
    this.statsService.getTeamStatistics()
      .subscribe(teamStats => this.teamStats = teamStats);
  }

  goBack(): void {
    this.location.back();
  }
}
