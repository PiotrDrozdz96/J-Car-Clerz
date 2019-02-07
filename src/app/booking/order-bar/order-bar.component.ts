import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { ReservationService } from '../../services/reservation.service';
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

  constructor(public reservation: ReservationService, public api: ApiService, public router: Router) {
    super(reservation, api, router);
    if (!this.reservation.checkPlaces()) {
      this.router.navigate(['']);
    }

    api.getCities().subscribe(cities => {
      this.cities = cities;
    });

    this.dropOff = new Meet(this.reservation.getDropOff());
    this.pickUp = new Meet(this.reservation.getPickUp());

  }

}
