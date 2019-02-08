import { Component } from '@angular/core';
import { Slider } from '../slider';
import { Car } from '../../car/car';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-slider-cars',
  templateUrl: './slider-cars.component.html',
  styleUrls: ['../slider.component.css']
})
export class SliderCarsComponent extends Slider {

  list: Array<Car>;

  constructor(private api: ApiService) {
    super();
    this.api.getCars().subscribe(cars => {
      this.list = cars;
    });
  }

}
