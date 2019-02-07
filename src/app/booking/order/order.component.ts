import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { OrderService } from '../../services/order.service';
import { ApiService } from '../../services/api.service';
import { Meet } from '../meet/meet';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {

  public cities: Array<string>;
  public dropOff: Meet;
  public pickUp: Meet;

  constructor(public order: OrderService, public api: ApiService, public router: Router) {
    api.getCities().subscribe(cities => {
      this.cities = cities;
    });
    this.dropOff = new Meet(this.order.getDropOff());
    this.pickUp = new Meet(this.order.getPickUp());
   }

  ngOnInit() {
  }

  private changeMinEnd(): void {
    this.dropOff.setMin(this.pickUp.date.value.getDate() + 1);
  }

  public checkOrder() {
    if (this.order.checkPlaces()) {
      this.router.navigate(['/Booking/Step1']);
    } else {
      alert('Nie wskazano miejsca');
    }
  }

  public pickUpChange() {
    this.changeMinEnd();
    this.order.setPickUp(this.pickUp.getSimpleMeet());
  }

  public dropOffChange() {
    this.order.setDropOff(this.dropOff.getSimpleMeet());
  }

}
