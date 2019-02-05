import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

import { Car, EquipmentIcons } from '../car';
import { OrderService } from '../../services/order.service';


@Component({
  selector: 'app-car-full',
  templateUrl: './car-full.component.html',
  styleUrls: ['../car.component.css']
})
export class CarFullComponent implements OnInit {

  @Input() car: Car;
  @Input() choosenOption: boolean;

  public equipmentIcon = new EquipmentIcons();

  constructor(private router: Router, private order: OrderService) { }

  ngOnInit() {
  }

  public choose() {
    this.order.setCar(this.car);
    this.router.navigate(['/Booking/Step2']);
  }

}
