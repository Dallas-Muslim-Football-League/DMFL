import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TeamsComponent } from './components/teams/teams.component';
import { TeamDetailComponent } from './components/details/team-detail/team-detail.component';
import { StandingsDetailComponent } from './components/details/standings-detail/standings-detail.component';
import { StatisticsComponent } from './components/statistics/statistics.component';
import { ScheduleComponent } from './components/schedule/schedule.component';
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full'},
  { path: 'home', component: HomeComponent},
  { path: 'teams', component: TeamsComponent },
  { path: 'detail/:name', component: TeamDetailComponent},
  { path: 'standings', component: StandingsDetailComponent},
  { path: 'schedule', component: ScheduleComponent},
  { path: 'stats', component: StatisticsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }