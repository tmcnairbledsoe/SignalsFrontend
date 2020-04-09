import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { Trade } from '../models/Trade';

@Injectable({
  providedIn: 'root'
})
export class ChartService {

  myAppUrl: string;
  myApiUrl: string;
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json; charset=utf-8'
    })
  };
  
  constructor(private http: HttpClient) {
    this.myAppUrl = environment.appUrl;
    this.myApiUrl = 'api/ChartData';
  }
  
  getChartData(): Observable<Trade[]> {
    console.log(this.myAppUrl + this.myApiUrl);
    return this.http.get<Trade[]>(this.myAppUrl + this.myApiUrl)
    .pipe(
      retry(1),
      catchError(this.errorHandler)
    );
  }

  getChartDataArray(): number[] {
    var test = this.http.get(this.myAppUrl + this.myApiUrl);
    
    return [1,2,3,4,5,6];
  }

  getChartString(): string {
    return this.myAppUrl + this.myApiUrl;
  }

  errorHandler(error) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // Get client-side error
      errorMessage = error.error.message;
    } else {
      // Get server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    console.log(errorMessage);
    return throwError(errorMessage);
  }
}