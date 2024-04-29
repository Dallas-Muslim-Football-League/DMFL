import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TeamsComponent } from './components/teams/teams.component';
import { PlayersComponent } from './components/players/players.component';
import { RostersComponent } from './components/rosters/rosters.component';
import { TeamDetailComponent } from './components/details/team-detail/team-detail.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { RosterDetailComponent } from './components/details/roster-detail/roster-detail.component';
import { ScheduleDetailComponent } from './components/details/schedule-detail/schedule-detail.component';
import { StandingsDetailComponent } from './components/details/standings-detail/standings-detail.component';
import { ScheduleComponent } from './components/schedule/schedule.component';
import { OrderByPipe } from 'src/app/order-by.pipe';
import { StatisticsComponent } from './components/statistics/statistics.component';

@NgModule({
  declarations: [
    AppComponent,
    TeamsComponent,
    PlayersComponent,
    RostersComponent,
    TeamDetailComponent,
    DashboardComponent,
    RosterDetailComponent,
    ScheduleDetailComponent,
    StandingsDetailComponent,
    ScheduleComponent,
    OrderByPipe,
    StatisticsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
