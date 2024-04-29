import { Player } from "./player";
import { Statistics } from "./statistics";
import { Team } from "./team";

export interface Game {
    gameId: string,
    year: string,
    season: string,
    week: string,
    time: string,
    isPlayoff: boolean,
    homeTeam: Team,
    awayTeam: Team,
    homeScore: number,
    awayScore: number,
    homeTeamStats: Map<Player, Statistics>,
    awayTeamStats: Map<Player, Statistics>;
}
