import { Player } from "./player";
import { Season } from "./season";
import { Team } from "./team";

export interface Membership {
    id: number,
    player: Player,
    playerNumber: number,
    team: Team,
    season: Season,
    isActive: boolean,
    captain: boolean;
}