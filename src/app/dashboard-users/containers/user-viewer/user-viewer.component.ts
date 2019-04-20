import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute, ParamMap} from "@angular/router";

import { DashboardUsersService } from "../../dashboard-users.service";

import { Passenger } from "../../models/user.interface";
import { switchMap } from "rxjs/operators";

@Component({
  selector: 'app-user-viewer',
  templateUrl: './user-viewer.component.html',
  styleUrls: ['./user-viewer.component.scss']
})
export class UserViewerComponent implements OnInit {

  constructor(private  router: Router, private route: ActivatedRoute, private passengerService: DashboardUsersService ) { }

  passgener: Passenger;

  ngOnInit() {
    this.route.paramMap.pipe(
      switchMap((params: ParamMap) =>  {
        return this.passengerService.getPassenger(parseInt(params.get('id')))
      })).subscribe(((data: Passenger) => this.passgener = data));
  }

  onUpdatePassenger(event: Passenger) {
    this.passengerService.getUpdatePassenger(event).subscribe((data: Passenger) => {
      this.passgener = Object.assign({}, this.passgener, event);
    })
  }

  goBack() {
    this.router.navigate(['/passengers'])
  }
}
