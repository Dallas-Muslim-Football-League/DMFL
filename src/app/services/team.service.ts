import { Injectable } from '@angular/core';
import { Team } from '../models/team';
import { Observable, catchError, retry, throwError } from 'rxjs';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TeamService {

  private url = environment.backend_url + '/teams'

  // getTeams(): Observable<Team[]> {
  //   const teams = of(TEAMS);
  //   return teams;
  // }

  // getTeam(name: string): Observable<Team> {
  //   const team = TEAMS.find(t => t.name === name)!;
  //   return of(team);
  // }

  constructor(private http: HttpClient) { }

  // Http Options
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  };

  getTeamsUrl(): Observable<Team[]> {
    return this.http.get<Team[]>(this.url, this.httpOptions)
    .pipe(retry(1), catchError(this.handleError));
  }

  // HttpClient API get() method => Fetch employee
  getTeam(id: number): Observable<Team> {
    return this.http
      .get<Team>(this.url + '/' + id)
      .pipe(retry(1), catchError(this.handleError));
  }

   // Error handling
   handleError(error: any) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // Get client-side error
      errorMessage = error.error.message;
    } else {
      // Get server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    window.alert(errorMessage);
    return throwError(() => {
      return errorMessage;
    });
  }
}
