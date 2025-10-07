import { Player } from "./player";

export interface Roster {
    rosterId: string,
    year: string,
    season: string,
    players: Array<Player>;
}
