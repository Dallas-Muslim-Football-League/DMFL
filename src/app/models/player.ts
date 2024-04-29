import { Statistics } from "./statistics"

export interface Player {
    playerId: string,
    number: number,
    firstName: string,
    lastName: string,
    captain: boolean
    positions: Array<string>,
    playerStats: Statistics;
}
