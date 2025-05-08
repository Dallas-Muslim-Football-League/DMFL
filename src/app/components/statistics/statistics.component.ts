import { Component, OnInit } from '@angular/core';
import { StatisticService } from 'src/app/services/statistic.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-statistics',
  templateUrl: './statistics.component.html',
  styleUrls: ['./statistics.component.css']
})
export class StatisticsComponent implements OnInit {
  stats: any;

  constructor(private statsService: StatisticService, private location: Location) { }

  ngOnInit(): void {
    this.getStatistics();
  }


  getStatistics(): void {
    this.statsService.getStatistics()
      .subscribe(stats => this.stats = stats);
  }

  goBack(): void {
    this.location.back();
  }
}
