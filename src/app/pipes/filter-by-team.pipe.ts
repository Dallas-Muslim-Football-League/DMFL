import { Pipe, PipeTransform } from '@angular/core';
import { PlayerStatsWithTeamResponse } from '../dto/player-stats-with-team-response';
import { Game } from '../models/game';

@Pipe({
  name: 'filterByTeam'
})
export class FilterByTeamPipe implements PipeTransform {

  /**
   * Filters an array of PlayerStatsWithTeamResponse by matching the resolved teamId 
   * against the target team's ID (Home or Away).
   * @param stats The full array of PlayerStatsWithTeamResponse for the game.
   * @param teamType 'home' or 'away' to specify which team to filter by.
   * @param gameData The full Game object containing homeTeam.id and awayTeam.id.
   * @returns Filtered array of PlayerStatsWithTeamResponse.
   */
  transform(
    stats: PlayerStatsWithTeamResponse[] | null | undefined,
    teamType: 'home' | 'away', 
    game: Game | null | undefined
  ): PlayerStatsWithTeamResponse[] {

    console.log('FilterByTeamPipe called with teamType:', teamType, 'game:', game, 'stats:', stats);
    
    // 1. Handle null or empty inputs gracefully
    if (!stats || !game) {
      return [];
    }

    // 2. Determine the target Team ID
    const targetTeamId = teamType === 'home' 
                         ? game.homeTeam?.id 
                         : game.awayTeam?.id;
                         
    if (!targetTeamId) {
        return [];
    }

    // 3. Filter the array based on the resolved 'teamId' field in the DTO
    return stats.filter(stat => stat.teamId === targetTeamId);
  }
}
