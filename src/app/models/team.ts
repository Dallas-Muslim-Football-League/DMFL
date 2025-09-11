import { Player } from "./player";

export interface Team {
    id: number,
    name: string,
    abbreviation: string,
    players: Array<Player>;
    active: boolean;
}
