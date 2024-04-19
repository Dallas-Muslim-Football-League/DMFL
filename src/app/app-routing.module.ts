import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TeamsComponent } from './components/teams/teams.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { TeamDetailComponent } from './components/details/team-detail/team-detail.component';
import { StandingsDetailComponent } from './components/details/standings-detail/standings-detail.component';
import { ScheduleDetailComponent } from './components/details/schedule-detail/schedule-detail.component';
import { LeagueNewsComponent } from './components/league-news/league-news.component';

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full'},
  { path: 'dashboard', component: DashboardComponent},
  { path: 'teams', component: TeamsComponent },
  { path: 'detail/:name', component: TeamDetailComponent},
  { path: 'standings', component: StandingsDetailComponent},
  { path: 'schedule', component: ScheduleDetailComponent},
  { path: 'news', component: LeagueNewsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }