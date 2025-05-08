import { Game } from "./game";
import { Player } from "./player";

export interface Statistic {
    id: number,
    player: Player,
    game: Game,
    receptions: number,
    receivingTouchdowns: number,
    receivingYards: number,
    passingTouchdowns: number,
    passingYards: number,
    interceptionsThrown: number,
    rushingTouchdowns: number,
    rushingYards: number;
    defensiveTouchdowns: number,
    defensiveInterceptions: number,
    sacks: number,
    safties: number
}
