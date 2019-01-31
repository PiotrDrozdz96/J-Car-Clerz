import { Injectable, EventEmitter } from '@angular/core';

import { ApiService } from './api.service';

import { Meet } from '../booking/meet/meet';
import { Car } from '../car/car';
import { Order } from '../booking/Order';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  public pickUp: Meet;
  public dropOff: Meet;

  public car: Car;

  public change: EventEmitter<void> = new EventEmitter();

  constructor(private api: ApiService) {

    this.pickUp = new Meet(1);
    this.dropOff = new Meet(2);
  }

  public changeMinEnd(): void {
    this.dropOff.setMin(this.pickUp.date.value.getDate() + 1);
  }

  public checkOffer(): boolean {
    return (this.pickUp.place && this.dropOff.place) ? true : false;
  }

  public setCar(car: Car) {
    this.car = car;
  }

  public makeOrder(): Order {
    return this.api.calculateOrder({
      car: this.car,
      pickUp: {
        date: this.pickUp.date.value,
        place: this.pickUp.place
      },
      dropOff: {
        date: this.dropOff.date.value,
        place: this.dropOff.place
      }
    });
  }
}
