import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

import { Car } from '../car';

@Component({
  selector: 'app-car-price',
  templateUrl: './car-price.component.html',
  styleUrls: ['../car.component.css']
})
export class CarPriceComponent implements OnInit {

  @Input() car: Car;

  constructor(private router: Router) { }

  ngOnInit() {
  }

  public more() {
      this.router.navigate(['car/' + this.car.id]);
  }

}
