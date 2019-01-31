import { Injectable } from '@angular/core';

import { ApiService } from './api.service';

import { Meet } from '../booking/meet/meet';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  public pickUp: Meet;
  public dropOff: Meet;

  constructor(private api: ApiService) {

    this.pickUp = new Meet(1);
    this.dropOff = new Meet(2);
  }

  public changeMinEnd(): void {
    this.dropOff.setMin(this.pickUp.date.value.getDate() + 1);
  }

  public checkOffer(): boolean {
    if (!this.pickUp.place) {
      alert('Nie wskazano miejsca odbioru');
    } else if (!this.dropOff.place) {
      alert('Nie wskazano miejsca zwrotu');
    } else {
      return true;
    }
  }
}
