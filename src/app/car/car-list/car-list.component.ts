import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';

import { Car } from '../car';

@Component({
  selector: 'app-car-list',
  templateUrl: './car-list.component.html',
  styleUrls: ['../car.component.css']
})
export class CarListComponent implements OnInit {

  cars: Array<Car>;

  constructor(api: ApiService) {
    api.getCars().subscribe(cars => {
      this.cars = cars;
    });
  }

  ngOnInit() {
  }

}
