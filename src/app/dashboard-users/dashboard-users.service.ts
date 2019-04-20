import { Injectable } from '@angular/core';
import { Passenger } from "./models/user.interface";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";
import { map } from 'rxjs/operators';
import {environment} from "../../environments/environment";

const apiUrl: string = environment.apiUrl;

// {providedIn: 'root'}

@Injectable()

export class DashboardUsersService {
  constructor(private http: HttpClient) {}

  getPassengers(): Observable<Passenger[]> {
    return this.http.get(`${apiUrl}/passengers`).pipe(map((response: Passenger[]) => response));
  }

  getUpdatePassenger(passenger: Passenger): Observable<Passenger> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    }
    return this.http.put(`${apiUrl}/passengers/${passenger.id}`, passenger, httpOptions).pipe(map((response: Passenger) => response));
  }

  getDeletePassenger(passenger: Passenger): Observable<Passenger> {
    return this.http.delete(`${apiUrl}/passengers/${passenger.id}`).pipe(map((response: Passenger) => response));
  }
}
