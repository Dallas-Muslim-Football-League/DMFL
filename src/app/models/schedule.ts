import { Game } from "./game";

export interface Schedule {
    week: string,
    current: boolean,
    isPlayoffs: boolean,
    games: Array<Game>;
}
