import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { ApiService } from '../services/api.service';

import { Car } from './car';

@Component({
    selector: 'app-car',
    templateUrl: './car.component.html',
    styleUrls: ['./car.component.css']
})
export class CarComponent implements OnInit {

    public car: Car;

    constructor(private route: ActivatedRoute, private api: ApiService) {
        this.route.paramMap.subscribe(params => {
            this.api.getCar(params.get('car')).subscribe(car => {
                this.car = car;
            });
        });
    }

    ngOnInit() {
    }

}
