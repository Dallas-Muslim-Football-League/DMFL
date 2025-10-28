import { Injectable } from '@angular/core';
import { catchError, Observable, retry, throwError } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Photo } from '../models/photo';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PhotoService {

  private photoGalleryUrl = environment.backend_url + '/photo-gallery';

  constructor(private http: HttpClient) { }

  // Http Options
  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  };

  /** GET photos for the current season or off-season */
  getPhotos(): Observable<Photo[]> {
    return this.http.get<Photo[]>(this.photoGalleryUrl, this.httpOptions)
      .pipe(retry(1), catchError(this.handleError));
  }

  // Error handling
  private handleError(error: any) {
    let errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    console.error(errorMessage);
    return throwError(() => new Error('Something bad happened; please try again later.'));
  }
}
