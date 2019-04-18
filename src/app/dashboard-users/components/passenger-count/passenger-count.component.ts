import { Component, Input } from "@angular/core";
import { Passenger } from "../../models/user.interface";

@Component({
  selector: 'app-passenger-count',
  templateUrl: './passenger-count.component.html',
  styleUrls: ['./passenger-count.component.scss']
})

export class PassengerCountComponent {

  @Input()
  items: Passenger[];

  checkedInCount(): number {
    if(!this.items) return;
    return this.items.filter((passenger: Passenger) => passenger.checkedIn).length;
  }
}
