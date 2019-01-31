import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { OrderService } from '../../services/order.service';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-order-bar',
  templateUrl: './order-bar.component.html',
  styleUrls: ['./order-bar.component.css']
})
export class OrderBarComponent implements OnInit {

  public cities: Array<string>;

  constructor(public order: OrderService, private api: ApiService, private router: Router) {
    api.getCities().subscribe(cities => {
      this.cities = cities;
    });

    // if (!this.order.pickUp.place || !this.order.dropOff.place) {
    //   this.router.navigate(['']);
    // }
  }

  ngOnInit() {
  }

}
