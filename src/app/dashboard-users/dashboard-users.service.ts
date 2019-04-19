import { Injectable } from '@angular/core';
import { Passenger } from "./models/user.interface";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { map } from 'rxjs/operators';

const PASSENGER_API: string = '/api/passengers';

// {providedIn: 'root'}

@Injectable()

export class DashboardUsersService {
  constructor(private http: HttpClient) {}

  getPassengers(): Observable<Passenger[]> {
    return this.http.get(PASSENGER_API).pipe(map((response: any) => response.json()));
  }
}
