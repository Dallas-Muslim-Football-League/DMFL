import { Game } from "./game";

export interface Schedule {
    scheduleId: string,
    week: string,
    year: string,
    season: string,
    current: boolean,
    isPlayoffs: boolean,
    games: Array<Game>;
}
