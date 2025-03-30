import { Team } from "./team";

export interface Game {
    id: number,
    homeTeam: Team,
    awayTeam: Team
    homeScore: number,
    awayScore: number,
    date: Date,
    isPlayoff: boolean;
}
