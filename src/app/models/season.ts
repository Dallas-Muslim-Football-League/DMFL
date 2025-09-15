import { Schedule } from "./schedule";
import { Standing } from "./standing";
import { Team } from "./team";

export interface Season {
    id: number,
    year: number,
    season: string,
    startDate: Date,
    endDate: Date,
    numberOfPlayoffWeeks: number,
    isCurrent: boolean,
    teams: Array<Team>;
    schedules: Array<Schedule>;
    standings: Array<Standing>;
}