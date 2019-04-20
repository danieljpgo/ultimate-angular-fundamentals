import { Injectable } from '@angular/core';
import { Passenger } from "./models/user.interface";
import { HttpClient, HttpHeaders, HttpErrorResponse } from "@angular/common/http";
import { Observable, throwError } from "rxjs";
import { map, catchError } from 'rxjs/operators';

import {environment} from "../../environments/environment";

const apiUrl: string = environment.apiUrl;

// {providedIn: 'root'}

@Injectable()

export class DashboardUsersService {
  constructor(private http: HttpClient) {}

  getPassenger(id: number): Observable<Passenger> {
    return this.http.get(`${apiUrl}/passengers/${id}`)
      .pipe(map((response: Passenger) => response))
      .pipe(catchError(this.handleError));
  }

  getPassengers(): Observable<Passenger[]> {
    return this.http.get(`${apiUrl}/passengers`)
      .pipe(map((response: Passenger[]) => response))
      .pipe(catchError(this.handleError));
  }

  getUpdatePassenger(passenger: Passenger): Observable<Passenger> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    }
    return this.http.put(`${apiUrl}/passengers/${passenger.id}`, passenger, httpOptions)
      .pipe(map((response: Passenger) => response))
      .pipe(catchError(this.handleError));
  }

  getDeletePassenger(passenger: Passenger): Observable<Passenger> {
    return this.http.delete(`${apiUrl}/passengers/${passenger.id}`)
      .pipe(map((response: Passenger) => response))
      .pipe(catchError(this.handleError));
  }

  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    // return an observable with a user-facing error message
    return throwError(
      'Something bad happened; please try again later.');
  };
}
