import { Player } from "./player";
import { Roster } from "./roster";
import { Statistics } from "./statistics";

export interface Team {
    teamId: string,
    name: string;
    isActive: boolean,
    rosterMap: Map<string, Roster>,
    teamStats: Map<string, Statistics>;
}
