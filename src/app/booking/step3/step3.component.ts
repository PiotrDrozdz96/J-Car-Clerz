import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { OrderService } from '../../services/order.service';
import { ApiService } from '../../services/api.service';

import { Person } from '../Order';

@Component({
  selector: 'app-step3',
  templateUrl: './step3.component.html',
  styleUrls: ['./step3.component.css']
})
export class Step3Component implements OnInit {

  public requirments = [false, false];

  constructor(private router: Router, private api: ApiService, public order: OrderService) {
    if (!(this.order.checkPlaces() && this.order.getCar())) {
      this.router.navigate(['']);
    }
  }

  ngOnInit() {
  }

  ready(): boolean {
    const person = this.order.person;
    const keys = ['name', 'surname', 'PESEL', 'phone'];
    return this.requirments[0] && this.requirments[1] && keys.every(key => person[key] !== '');
  }

  booking() {
    this.api.booking(this.order.getReservation());
  }

}
