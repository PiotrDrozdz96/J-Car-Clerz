import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { OrderService } from '../../services/order.service';
import { ApiService } from '../../services/api.service';

import { OrderComponent } from '../order/order.component';

import { Meet } from '../meet/meet';

@Component({
  selector: 'app-order-bar',
  templateUrl: './order-bar.component.html',
  styleUrls: ['./order-bar.component.css']
})
export class OrderBarComponent extends OrderComponent {

  public cities: Array<string>;

  constructor(public order: OrderService, public api: ApiService, public router: Router) {
    super(order, api, router);
    if (!this.order.checkPlaces()) {
      this.router.navigate(['']);
    }

    api.getCities().subscribe(cities => {
      this.cities = cities;
    });

    this.dropOff = new Meet(this.order.getDropOff());
    this.pickUp = new Meet(this.order.getPickUp());
    console.log(this.order.getDropOff());

  }

}
