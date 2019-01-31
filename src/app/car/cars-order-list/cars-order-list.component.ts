import { Component, OnInit } from '@angular/core';

import { ApiService } from '../../services/api.service';

import { Car } from '../car';

@Component({
  selector: 'app-cars-order-list',
  templateUrl: './cars-order-list.component.html'
})
export class CarsOrderListComponent implements OnInit {

  public cars: Array<Car>;

  constructor(private api: ApiService) {
    this.api.getCars().subscribe(cars => {
      this.cars = cars;
    });
   }

  ngOnInit() {
  }

}
