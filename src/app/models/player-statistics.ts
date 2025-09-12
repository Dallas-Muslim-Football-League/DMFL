import { Game } from './game';
import { Player } from './player';
import { Statistic } from './statistics';

export interface PlayerStatistics extends Statistic {
  player: Player,
  game: Game
}