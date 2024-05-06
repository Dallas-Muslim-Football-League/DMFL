import { Game } from "./game";

export interface Schedule {
    week: string,
    current: boolean,
    games: Array<Game>;
}
