import { Player } from "./player";
import { Roster } from "./roster";
import { Statistics } from "./statistics";

export interface Team {
    teamId: string,
    name: string;
    isActive: boolean,
    roster: Roster,
    teamStats: Statistics;
}
