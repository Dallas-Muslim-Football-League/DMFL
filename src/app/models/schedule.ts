import { Game } from "./game";

export interface Schedule {
    id: number,
    week: string,
    current: boolean,
    playoff: boolean,
    games: Array<Game>;
}
