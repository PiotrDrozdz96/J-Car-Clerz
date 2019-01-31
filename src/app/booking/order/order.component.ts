import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { OrderService } from '../../services/order.service';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {

  public cities: Array<string>;

  constructor(public order: OrderService, private router: Router, private api: ApiService) {
    api.getCities().subscribe(cities => {
      this.cities = cities;
    });
   }

  ngOnInit() {
  }

  public checkOrder() {
    if (this.order.checkOffer()) {
      this.router.navigate(['/Booking/Step1']);
    }
  }

}
