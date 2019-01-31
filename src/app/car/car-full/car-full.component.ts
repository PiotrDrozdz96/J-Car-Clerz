import { Component, OnInit, Input } from '@angular/core';

import { Car, EquipmentIcons } from '../car';

@Component({
  selector: 'app-car-full',
  templateUrl: './car-full.component.html',
  styleUrls: ['./car-full.component.css']
})
export class CarFullComponent implements OnInit {

  @Input()
  car: Car;

  public equipmentIcon = new EquipmentIcons();

  constructor() { }

  ngOnInit() {
  }

}
