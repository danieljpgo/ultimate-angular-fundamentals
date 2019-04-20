import { Component, OnInit } from '@angular/core';

import { DashboardUsersService } from '../../dashboard-users.service'

import { Passenger } from '../../models/user.interface';
import {Router} from "@angular/router";

@Component({
  selector: 'app-user-dashboard',
  templateUrl: './user-dashboard.component.html',
  styleUrls: ['./user-dashboard.component.scss']
})
export class UserDashboardComponent implements OnInit {

  firstNumber = 1;
  secondNumber = 1;
  happyFace = true;
  name = '';
  passengers: Passenger[] = [];

  constructor(private router: Router, private passengerService: DashboardUsersService) { }

  ngOnInit() {
    this.handleGet();
  }

  handleGet() {
    this.passengerService.getPassengers().subscribe((data: Passenger[]) => this.passengers = data)
  }

  handleRemove(event: Passenger) {
    this.passengerService.getDeletePassenger(event).subscribe(((data: Passenger) => {
      this.passengers = this.passengers.filter((passenger: Passenger) => passenger.id !== event.id)
    }))
  }

  handleEdit(event: Passenger) {
    this.passengerService.getUpdatePassenger(event).subscribe((data: Passenger) => {
      this.passengers = this.passengers.map((passenger: Passenger) => {
        if(passenger.id === event.id) {
          passenger = Object.assign({}, passenger, event)
        }
        return passenger;
      })
    });
  }

  handleView(event: Passenger) {
    this.router.navigate(['/passengers', event.id])
  }

  // handleInput(event: any) {
  //   this.name = event.target.value;
  // }
  // handleClick() {
  //   this.name = 'Catra';
  // }
  // handleClickRef(value: string) {
  //   // console.log(value);
  // }
  // handleChange() {
  //   this.name = 'sss';
  // }
  //
  // handleChange2(value: string) {
  //   this.name = value;
  // }
}
