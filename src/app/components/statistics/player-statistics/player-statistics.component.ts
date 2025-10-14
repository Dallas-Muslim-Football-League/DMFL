import { Component, OnInit } from '@angular/core';
import { StatisticService } from 'src/app/services/statistic.service';
import { CommonModule, Location } from '@angular/common';
import { PlayerStatistics } from 'src/app/models/player-statistics';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-player-statistics',
  imports: [
    CommonModule,
    FormsModule
  ],
  templateUrl: './player-statistics.component.html',
  styleUrl: './player-statistics.component.css',
})
export class PlayerStatisticsComponent implements OnInit {
  playerStats: PlayerStatistics[] = [];
  selectedCategory: string = 'passing';

  constructor(private statsService: StatisticService, private location: Location) { }

  ngOnInit(): void {
    this.getPlayerStatistics();
  }

  getPlayerStatistics(): void {
    this.statsService.getPlayerStatistics()
      .subscribe(playerStats => {
        this.playerStats = playerStats;
        this.sortStats(); // Ensure stats are sorted after data loads
      });
  }

  sortStats() {
    this.playerStats.sort((a: PlayerStatistics, b: PlayerStatistics) => {
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

  isHighlightedColumn(columnName: string): boolean {
    const highlightMap: { [key: string]: string[] } = {
      passing: ['PAS TD', 'PAS YDS', 'INT THRN'],
      receiving: ['REC', 'REC TD', 'REC YDS'],
      defense: [
        'DEF TD',
        'DEF INT',
        'FLAG PULLS',
        'PASS BKUPS',
        'SACK',
        'SFTY',
      ],
    };

    const columnsToHighlight = highlightMap[this.selectedCategory] || [];
    return columnsToHighlight.includes(columnName);
  }

  goBack(): void {
    this.location.back();
  }
}
