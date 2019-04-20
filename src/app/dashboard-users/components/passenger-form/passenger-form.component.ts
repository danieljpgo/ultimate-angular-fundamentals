import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

import { Passenger } from "../../models/user.interface";
import { Baggage } from "../../models/baggage.interface";

@Component({
  selector: 'app-passenger-form',
  templateUrl: './passenger-form.component.html',
  styleUrls: ['./passenger-form.component.scss']
})
export class PassengerFormComponent implements OnInit {
  @Input()
  detail: Passenger;

  @Output()
  update: EventEmitter<Passenger> = new EventEmitter<Passenger>();

  baggage: Baggage[] = [{
    key: 'none',
    value: 'No baggage'
  }, {
    key: 'hand-only',
    value: 'Hand baggage'
  }, {
    key: 'hold-only',
    value: 'Hold baggage'
  }, {
    key: 'hand-hold',
    value: 'Hand and hold baggage'
  }]

  constructor() { }

  ngOnInit() {  }

  toggleCheckIn(checkedIn: boolean) {
    if(checkedIn) {
      this.detail.checkInDate = Date.now();
    }
  }

  handleSubmit(passanger: Passenger, isValid: boolean) {
    if (isValid) {
      this.update.emit(passanger);
    }
  }

}

