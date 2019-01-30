import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { OrderService } from '../../services/order.service';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {

  constructor(public order: OrderService, private router: Router) { }

  ngOnInit() {
  }

  public checkOrder() {
    if (this.order.checkOffer()) {
      this.router.navigate(['/Booking']);
    }
  }

}
