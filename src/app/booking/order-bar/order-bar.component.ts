import { Component, OnInit } from '@angular/core';

import { OrderService } from '../../services/order.service';

@Component({
  selector: 'app-order-bar',
  templateUrl: './order-bar.component.html',
  styleUrls: ['./order-bar.component.css']
})
export class OrderBarComponent implements OnInit {

  constructor(public order: OrderService) { }

  ngOnInit() {
  }

}
