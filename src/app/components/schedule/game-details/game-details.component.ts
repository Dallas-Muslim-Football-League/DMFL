import { CommonModule, Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { PlayerStatsWithTeamResponse } from 'src/app/dto/player-stats-with-team-response';
import { Game } from 'src/app/models/game';
import { Statistic } from 'src/app/models/statistics';
import { TeamStatistics } from 'src/app/models/team-statistics';
import { FilterByTeamPipe } from 'src/app/pipes/filter-by-team.pipe';
import { GameService } from 'src/app/services/game.service';
import { StatisticService } from 'src/app/services/statistic.service';

@Component({
    selector: 'app-game-details',
    imports: [
        CommonModule,
        FilterByTeamPipe
    ],
    templateUrl: './game-details.component.html',
    styleUrls: ['./game-details.component.css'],
})
export class GameDetailsComponent implements OnInit {

  activeTab: string = 'overview';
  activeTeamTab: string = 'home';
  game: Game | undefined;
  teamStats: Statistic[] = [];
  homeTeamStats: TeamStatistics[] = [];
  awayTeamStats: TeamStatistics[] = [];
  playerStats: PlayerStatsWithTeamResponse[] = [];
  safeVideoUrl: SafeResourceUrl | null = null;

  constructor(
    private route: ActivatedRoute,
    private sanitizer: DomSanitizer,
    private location: Location,
    private gameService: GameService,
    private statisticService: StatisticService
  ) { }

  ngOnInit(): void {
    this.loadGameDetails();
    this.loadTeamStats();
    this.loadPlayerStats();
  }

  loadGameDetails(): void {
    const gameId = Number(this.route.snapshot.paramMap.get('id'));
    this.gameService.getGameById(gameId).subscribe({
      next: (game) => {
        game.videoHighlightUrl = "https://www.youtube.com/watch?v=1Cj0J1gkiGo";
        this.game = game;
        this.setVideoEmbedUrl(this.game.videoHighlightUrl);
        console.log('Game details:', game);
      },
      error: (error) => {
        console.error('Error fetching game details:', error);
      }
    });
  }

  loadTeamStats(): void {
    const gameId = Number(this.route.snapshot.paramMap.get('id'));
    this.statisticService.getTeamStatsByGameId(gameId).subscribe({
      next: (teamStats) => {
        for (let stat of teamStats) {
          if (this.game) {
            if (stat.team.id === this.game.homeTeam?.id) {
              this.homeTeamStats.push(stat);
            } else if (stat.team.id === this.game.awayTeam?.id) {
              this.awayTeamStats.push(stat);
            }
          }
        }
        console.log('Team stats:', teamStats);
      },
      error: (error) => {
        console.error('Error fetching team stats:', error);
      }
    });
  }

  loadPlayerStats(): void {
    const gameId = Number(this.route.snapshot.paramMap.get('id'));
    this.statisticService.getPlayerStatsByGameId(gameId).subscribe({
      next: (playerStats) => {
        this.playerStats = playerStats;
        console.log('Player stats:', playerStats);
      },
      error: (error) => {
        console.error('Error fetching player stats:', error);
      }
    });
  }

  selectTab(tabId: string): void {
    this.activeTab = tabId;
  }

  selectTeamTab(team: string): void {
    // Allows setting the internal tab state based on 'home' or 'away'
    this.activeTeamTab = team;
  }
  
  isTabActive(tabId: string): boolean {
    return this.activeTab === tabId;
  }

  // Helper function to safely convert the raw URL string into a trusted resource for the iframe
  setVideoEmbedUrl(url: string | null): void {
    if (url && url.length > 0) {
      // 1. Extract the YouTube video ID
      // This logic is simplified; robust regex is often used here.
      let videoId = url.split('v=').pop()?.split('&')[0];
      
      if (videoId) {
          // 2. Format it as an embeddable URL
          const embedUrl = `https://www.youtube.com/embed/${videoId}`;
          
          // 3. Trust the URL to bypass Angular's XSS security
          this.safeVideoUrl = this.sanitizer.bypassSecurityTrustResourceUrl(embedUrl);
      }
    } else {
      this.safeVideoUrl = null;
    }
  }

  goBack(): void {
    this.location.back();
  }

}
