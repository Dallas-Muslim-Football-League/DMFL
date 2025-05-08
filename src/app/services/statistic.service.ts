import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Statistic } from '../models/statistics';

@Injectable({
  providedIn: 'root'
})
export class StatisticService {

  private url = environment.backend_url + '/statistics';

  constructor(private http: HttpClient) { }

  getStatistics(): Observable<Statistic[]> {
    return this.http.get<Statistic[]>(this.url);
  }
}
