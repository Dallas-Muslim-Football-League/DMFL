import { Injectable } from '@angular/core';
import { NewsItem } from '../models/news-item';
import { catchError, Observable, retry, throwError } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class NewsService {

  private newsUrl = environment.backend_url + '/news';

  constructor(private http: HttpClient) { }

  // Http Options
  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  };

  /** GET news for the current season or off-season */
  getNews(): Observable<NewsItem[]> {
    return this.http.get<NewsItem[]>(this.newsUrl, this.httpOptions)
      .pipe(retry(1), catchError(this.handleError));
  }

  // Error handling
  private handleError(error: any) {
    let errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    console.error(errorMessage);
    return throwError(() => new Error(errorMessage));
  }

}
