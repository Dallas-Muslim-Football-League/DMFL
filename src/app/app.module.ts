import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';

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
import { HomeComponent } from './components/home/home.component';
import { GameDetailsComponent } from './components/details/game-details/game-details.component';
import { PlayerStatisticsComponent } from './components/statistics/player-statistics/player-statistics.component';
import { TeamStatisticsComponent } from './components/statistics/team-statistics/team-statistics.component';

@NgModule({ declarations: [
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
        PlayerStatisticsComponent,
        TeamStatisticsComponent,
        HomeComponent,
        GameDetailsComponent
    ],
    bootstrap: [AppComponent], imports: [BrowserModule,
        AppRoutingModule,
        FormsModule], providers: [provideHttpClient(withInterceptorsFromDi())] })
export class AppModule { }
