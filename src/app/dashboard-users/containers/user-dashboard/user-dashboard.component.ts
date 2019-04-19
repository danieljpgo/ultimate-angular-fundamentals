import { Component, OnInit } from '@angular/core';
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

  constructor() { }

  ngOnInit() {
    // console.log('ngOnInit')
    this.passengers = [{
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
  handleInput(event: any) {
    this.name = event.target.value;
  }
  handleClick() {
    this.name = 'Catra';
  }
  handleClickRef(value: string) {
    // console.log(value);
  }
  handleChange() {
    this.name = 'sss';
  }

  handleChange2(value: string) {
    this.name = value;
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
}
