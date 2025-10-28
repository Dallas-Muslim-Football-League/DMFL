import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { PlayerStatistics } from '../models/player-statistics';
import { TeamStatistics } from '../models/team-statistics';
import { PlayerStatsWithTeamResponse } from '../dto/player-stats-with-team-response';

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

  getPlayerStatsByGameId(gameId: number): Observable<PlayerStatsWithTeamResponse[]> {
    return this.http.get<PlayerStatsWithTeamResponse[]>(`${this.url}/players/${gameId}`);
  }

  getTeamStatsByGameId(gameId: number): Observable<TeamStatistics[]> {
    return this.http.get<TeamStatistics[]>(`${this.url}/teams/${gameId}`);
  }
}
