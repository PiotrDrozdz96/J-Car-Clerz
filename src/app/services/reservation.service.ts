import { Injectable, EventEmitter } from '@angular/core';

import { ApiService } from './api.service';

import { Meet } from '../booking/meet/meet';
import { Car } from '../car/car';
import { Order, Reservation, SimpleMeet, Person } from '../booking/Order';

@Injectable({
  providedIn: 'root'
})
export class ReservationService {

  public order = new Order();
  public person = new Person();

  public change: EventEmitter<void> = new EventEmitter();

  constructor(private api: ApiService) { }

  public setPickUp(meet: SimpleMeet) {
    this.order.pickUp = meet;
    this.change.emit();
  }

  public getPickUp(): SimpleMeet {
    return this.order.pickUp;
  }

  public setDropOff(meet: SimpleMeet) {
    this.order.dropOff = meet;
    this.change.emit();
  }

  public getDropOff(): SimpleMeet {
    return this.order.dropOff;
  }

  public setCar(car: Car) {
    this.order.car = car;
  }

  public getCar(): Car {
    return this.order.car;
  }

  public checkPlaces(): boolean {
    return (this.order.pickUp.place && this.order.dropOff.place) ? true : false;
  }

  public makeOrder(): Order {
    return this.order = this.api.calculateOrder(this.order);
  }

  public getReservation(): Reservation {
    return {
      order: this.order,
      person: this.person
    };
  }

}
