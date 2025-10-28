import { Injectable } from '@angular/core';
import { catchError, Observable, retry, throwError } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Game } from '../models/game';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GameService {

  private gamesUrl = environment.backend_url + '/games';

  constructor(private http: HttpClient) { }

  getGameById(id: number): Observable<Game> {
    return this.http.get<Game>(`${this.gamesUrl}/${id}`)
      .pipe(retry(1), catchError(this.handleError));
  }

  // Error handling
  private handleError(error: any) {
    let errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    console.error(errorMessage);
    return throwError(() => new Error('Something bad happened; please try again later.'));
  }
}
