import { Component, OnInit } from '@angular/core';
import { Car } from '../car/car';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  cars: Array<Car>;
  currentIndex = 0;

  constructor(api: ApiService) {
    api.getCars().subscribe(cars => {
      this.cars = cars;
    });
  }

  ngOnInit() {
  }

  public left() {
    this.currentIndex = this.currentIndex === 0 ? this.cars.length - 1 : this.currentIndex - 1;
  }

  public right() {
    this.currentIndex = this.currentIndex === this.cars.length - 1 ? 0 : this.currentIndex + 1;
  }

}
