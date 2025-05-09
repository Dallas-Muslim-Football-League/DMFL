import { inject } from '@angular/core';
import { RenderMode, ServerRoute } from '@angular/ssr';
import { TeamService } from './services/team.service';
import { ScheduleService } from './services/schedule.service'; 
import { Team } from './models/team';
import { Schedule } from './models/schedule';
import { firstValueFrom, Observable } from 'rxjs';

export const serverRoutes: ServerRoute[] = [
  {
    path: '**',
    renderMode: RenderMode.Server
  },
  {
    path: 'home',
    renderMode: RenderMode.Prerender
  },
  {
    path: 'teams/detail/:id',
    renderMode: RenderMode.Prerender,
    async getPrerenderParams() {
      const teamService = inject(TeamService);
      const teams$: Observable<Team[]> = teamService.getTeamsUrl();
      const teams: Team[] = await firstValueFrom(teams$);
      return teams.map((team: Team) => ({ id: team.id.toString() }));
    },
  },
  {
    path: 'schedule/games/detail/:id',
    renderMode: RenderMode.Prerender,
    async getPrerenderParams() {
      const scheduleService = inject(ScheduleService);
      const schedules$: Observable<Schedule[]> = scheduleService.getSchedule();
      const schedules: Schedule[] = await firstValueFrom(schedules$);
      return schedules.map((schedule: Schedule) => ({ id: schedule.id.toString() }));
    },
  }
];
