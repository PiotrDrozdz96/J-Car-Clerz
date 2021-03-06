import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Order, AdditionalCost, AdditionalCostOnDemand, Costs } from '../Order';

import { ReservationService } from '../../services/reservation.service';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-step2',
  templateUrl: './step2.component.html',
  styleUrls: ['./step2.component.css']
})
export class Step2Component implements OnInit {

  order: Order;

  constructor(public reservation: ReservationService, private router: Router) {
    if (!this.reservation.getCar()) {
      this.router.navigate(['']);
    } else {
      this.order = this.reservation.makeOrder();
    }
    this.reservation.change.subscribe(() => {
      const demand = this.order.costs.additionalCostsOnDemand;
      this.order = this.reservation.makeOrder();
      this.order.costs.additionalCostsOnDemand = demand;
    });
    window.scrollTo(0, 0);
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
    this.router.navigate(['/Booking/Step3']);
  }

}
