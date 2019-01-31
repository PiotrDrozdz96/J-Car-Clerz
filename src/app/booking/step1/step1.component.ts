import { Component, OnInit } from '@angular/core';

import { ApiService } from '../../services/api.service';

import { Car } from '../../car/car';

@Component({
  selector: 'app-step1',
  templateUrl: './step1.component.html',
})
export class Step1Component implements OnInit {

  public cars: Array<Car>;

  constructor(private api: ApiService) {
    this.api.getCars().subscribe(cars => {
      this.cars = cars;
    });
  }

  ngOnInit() {
  }

}
