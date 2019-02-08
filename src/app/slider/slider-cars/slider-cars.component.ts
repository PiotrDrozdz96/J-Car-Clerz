import { Component, Input } from '@angular/core';
import { Slider } from '../slider';
import { Car } from '../../car/car';

@Component({
  selector: 'app-slider-cars',
  templateUrl: './slider-cars.component.html',
  styleUrls: ['../slider.component.css']
})
export class SliderCarsComponent extends Slider {

  @Input()
  list: Array<Car>;

  constructor() { super(); }

}
