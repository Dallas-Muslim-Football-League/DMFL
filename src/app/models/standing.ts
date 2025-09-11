import { Team } from "./team";

export interface Standing {
    id: number,
    team: Team,
    wins: Number,
    losses: Number,
    winPercentage: Number,
    pointsFor: Number,
    pointsAgainst: Number,
    pointsDifferential: Number,
    streak: String;
}
