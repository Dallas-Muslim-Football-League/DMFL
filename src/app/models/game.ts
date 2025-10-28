import { Team } from "./team";

export interface Game {
    id: number,
    homeTeam: Team | null,
    awayTeam: Team | null,
    homeScore: number,
    awayScore: number,
    date: Date,
    pointInGame: string,
    isPlayoff: boolean;
    videoHighlightUrl: string | null;
    videoStartTimeInSeconds: number | null;
}
