import { Component, OnInit } from '@angular/core';

import { DashboardUsersService } from "../../dashboard-users.service";

import { Passenger } from "../../models/user.interface";

@Component({
  selector: 'app-user-viewer',
  templateUrl: './user-viewer.component.html',
  styleUrls: ['./user-viewer.component.scss']
})
export class UserViewerComponent implements OnInit {

  constructor(private passengerService: DashboardUsersService ) { }
  passgener: Passenger;

  ngOnInit() {
    this.passengerService.getPassenger(1).subscribe(((data: Passenger) => this.passgener = data))
  }

  onUpdatePassenger(event: Passenger) {
    this.passengerService.getUpdatePassenger(event).subscribe((data: Passenger) => {
      this.passgener = Object.assign({}, this.passgener, event);
    })
  }

}
