import { Component, OnInit } from '@angular/core';

import { DashboardUsersService } from '../../dashboard-users.service'

import { Passenger } from '../../models/user.interface';

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

  constructor(private passengerService: DashboardUsersService) { }

  ngOnInit() {
    this.passengerService.getPassengers().subscribe((data: Passenger[]) => {
      this.passengers = data;
      console.log(data)
    })
  }

  handleRemove(event: Passenger) {
    this.passengers = this.passengers.filter((passenger: Passenger) => passenger.id !== event.id)
  }

  handleEdit(event: Passenger) {
    this.passengers = this.passengers.map((passenger: Passenger) => {
      if(passenger.id === event.id) {
        passenger = Object.assign({}, passenger, event)
      }
      return passenger;
    })
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
