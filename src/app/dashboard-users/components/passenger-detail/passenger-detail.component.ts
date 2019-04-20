import { Component, Input, OnInit, Output, OnChanges, EventEmitter} from "@angular/core";

import { Passenger } from "../../models/user.interface";


@Component({
  selector: 'app-passenger-detail',
  templateUrl: './passenger-detail.component.html',
  styleUrls: ['./passenger-detail.component.scss']
})

export  class PassengerDetailComponent implements OnChanges, OnInit{
  @Input()
  detail: Passenger;

  @Output()
  remove: EventEmitter<Passenger> = new EventEmitter<Passenger>();

  @Output()
  edit: EventEmitter<Passenger> = new EventEmitter<Passenger>();

  @Output()
  view: EventEmitter<Passenger> = new EventEmitter<Passenger>();

  editing: boolean = false;

  constructor(){}

  ngOnChanges(changes): void {
    if (changes.detail) {
      this.detail = Object.assign({}, changes.detail.currentValue);
    }
  }

  ngOnInit() {
  }

  onNameChange(value: string) {
    this.detail.fullName = value;
  }
  toggleEdit(){
    if (this.editing) {
      this.edit.emit(this.detail);
    }
    this.editing = !this.editing;
  }
  onRemove() {
    this.remove.emit(this.detail);
  }
  goPassenger() {
    this.view.emit(this.detail);
  }

}
