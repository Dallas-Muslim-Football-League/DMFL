import { Game } from './game';
import { Statistic } from './statistics';
import { Team } from './team';

export interface PlayerStatistics extends Statistic {
  team: Team,
  game: Game
}