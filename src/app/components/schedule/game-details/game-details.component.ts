import { CommonModule, Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
// Import RxJS operators for chaining
import { forkJoin } from 'rxjs';
import { switchMap, tap } from 'rxjs/operators';
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
    // Call the single chained function to load all data sequentially
    this.loadGameData();
  }
  
  /**
   * Loads game details first, then concurrently loads team and player stats.
   * This eliminates the race condition where stats might arrive before this.game is set.
   */
  loadGameData(): void {
    const gameId = Number(this.route.snapshot.paramMap.get('id'));

    this.gameService.getGameById(gameId).pipe(
        // 1. Set this.game and video URL immediately after receiving details
        tap(gameDetails => {
            this.game = gameDetails;
            this.setVideoEmbedUrl(this.game.videoHighlightUrl);
        }),
        
        // 2. Use switchMap to wait for step 1, then switch to loading stats
        switchMap(() => {
            // Check if game details were successfully set
            if (!this.game) {
                throw new Error('Game details could not be loaded.');
            }

            // Launch team stats and player stats concurrently using forkJoin
            const teamStats$ = this.statisticService.getTeamStatsByGameId(gameId);
            const playerStats$ = this.statisticService.getPlayerStatsByGameId(gameId);

            return forkJoin([teamStats$, playerStats$]);
        })
    ).subscribe({
        // 3. This 'next' executes only after all three APIs have succeeded
        next: ([teamStats, playerStats]) => {
            // Process the received data
            this.processTeamStats(teamStats);
            this.playerStats = playerStats;
        },
        error: (error) => {
            console.error('Error loading game data:', error);
        }
    });
  }

  /**
   * Helper function to process team statistics and assign them to home/away arrays.
   * @param teamStats The array of TeamStatistics returned from the API.
   */
  processTeamStats(teamStats: TeamStatistics[]): void {
      // Clear arrays before population
      this.homeTeamStats = [];
      this.awayTeamStats = [];

      // this.game is guaranteed to be defined here due to the switchMap chain
      if (this.game) {
          for (let stat of teamStats) {
              if (stat.team.id === this.game.homeTeam?.id) {
                  this.homeTeamStats.push(stat);
              } else if (stat.team.id === this.game.awayTeam?.id) {
                  this.awayTeamStats.push(stat);
              }
          }
      }
  }

  // NOTE: loadGameDetails, loadTeamStats, and loadPlayerStats were removed 
  // as their logic is now integrated into loadGameData()
  
  selectTab(tabId: string): void {
    this.activeTab = tabId;
  }

  selectTeamTab(team: string): void {
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