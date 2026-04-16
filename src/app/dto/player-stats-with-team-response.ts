import { PlayerStatistics } from "../models/player-statistics";

export interface PlayerStatsWithTeamResponse {
    playerStatistics: PlayerStatistics,
    playerNumber: number,
    teamId: number;
}
