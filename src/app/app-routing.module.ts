import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TeamsComponent } from './components/teams/teams.component';
import { TeamDetailComponent } from './components/details/team-detail/team-detail.component';
import { StandingsDetailComponent } from './components/details/standings-detail/standings-detail.component';
import { ScheduleComponent } from './components/schedule/schedule.component';
import { HomeComponent } from './components/home/home.component';
import { GameDetailsComponent } from './components/details/game-details/game-details.component';
import { PlayerStatisticsComponent } from './components/statistics/player-statistics/player-statistics.component';
import { TeamStatisticsComponent } from './components/statistics/team-statistics/team-statistics.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full'},
  { path: 'home', component: HomeComponent},
  { path: 'teams', component: TeamsComponent },
  { path: 'teams/detail/:id', component: TeamDetailComponent},
  { path: 'standings', component: StandingsDetailComponent},
  { path: 'schedule', component: ScheduleComponent},
  // { path: 'stats', component: PlayerStatisticsComponent},
  { path: 'stats/player', component: PlayerStatisticsComponent},
  { path: 'stats/team', component: TeamStatisticsComponent},
  { path: 'schedule/games/detail/:id', component: GameDetailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }