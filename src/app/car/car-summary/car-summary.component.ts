import { Component, OnInit, Input } from '@angular/core';

import { Order } from '../../booking/Order';

@Component({
  selector: 'app-car-summary',
  templateUrl: './car-summary.component.html',
  styleUrls: ['../car.component.css']
})
export class CarSummaryComponent implements OnInit {

  @Input() order: Order;

  constructor() { }

  ngOnInit() {
  }

  public getTotalCost(): number {
    const costs = this.order.costs;
    return costs.price + costs.additionalCosts.reduce((sum, cost) => sum + cost.price, 0) +
    costs.additionalCostsOnDemand.reduce((sum, cost) => sum + (cost.demand ? cost.price : 0), 0);
  }

}
