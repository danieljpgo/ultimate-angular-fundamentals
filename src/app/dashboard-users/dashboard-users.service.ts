import { Injectable } from '@angular/core';
import {Passenger} from "./models/user.interface";

@Injectable({
  providedIn: 'root'
})
export class DashboardUsersService {
  constructor() { }

  getPassengers(): Passenger[] {
    return [{
      id: 1,
      fullName: 'Stephen',
      checkedIn: true,
      checkInDate: 1452292999,
      children: [{ name: 'Ted', age: 12}]
    }, {
      id: 2,
      fullName: 'Lucas',
      checkedIn: true,
      checkInDate: 1452292999,
      children: [{ name: 'Luis', age: 12}, { name: 'Voce', age: 15}]
    }, {
      id: 3,
      fullName: 'James',
      checkedIn: false,
    }]
  }
}
