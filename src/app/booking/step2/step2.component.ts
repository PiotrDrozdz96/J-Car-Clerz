import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Order, AdditionalCost, AdditionalCostOnDemand, Costs } from '../Order';

import { OrderService } from '../../services/order.service';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-step2',
  templateUrl: './step2.component.html',
  styleUrls: ['./step2.component.css']
})
export class Step2Component implements OnInit {

  order: Order;

  constructor(public orderService: OrderService, private router: Router, private api: ApiService) {
    if (!this.orderService.pickUp.date.value || !this.orderService.dropOff.date.value || !this.orderService.car) {
      this.router.navigate(['/Booking/Step1']);
    } else {
      this.order = this.orderService.makeOrder();
    }
  }

  ngOnInit() {
  }

  public getSum(sum: number, cost: AdditionalCost): number {
    return sum + cost.price;
  }

  public getSumFilter(sum: number, cost: AdditionalCostOnDemand): number {
    return sum + (cost.demand ? cost.price : 0);
  }

  public getTotalCost(costs: Costs) {
    return costs.price + costs.deposit + costs.additionalCosts.reduce(this.getSum, 0) +
      costs.additionalCostsOnDemand.reduce(this.getSumFilter, 0);
  }

  public booking() {
    this.api.booking(this.order);
  }

}
