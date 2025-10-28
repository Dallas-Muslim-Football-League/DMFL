import { PlayerStatistics } from "../models/player-statistics";

export interface PlayerStatsWithTeamResponse {
    playerStatistics: PlayerStatistics,
    teamId: number;
}
