import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { PlayerStatistics } from '../models/player-statistics';
import { TeamStatistics } from '../models/team-statistics';

@Injectable({
  providedIn: 'root'
})
export class StatisticService {

  private url = environment.backend_url + '/seasons/statistics';

  constructor(private http: HttpClient) { }

  getPlayerStatistics(): Observable<PlayerStatistics[]> {
    return this.http.get<PlayerStatistics[]>(this.url + '/players');
  }

  getTeamStatistics(): Observable<TeamStatistics[]> {
    return this.http.get<TeamStatistics[]>(this.url + '/teams');
  }
}
