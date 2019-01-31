import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { Order } from '../booking/Order';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  public getCities(): Observable<any> {
    return this.http.get('assets/data/cities.JSON');
  }

  public getCars(): Observable<any> {
    return this.http.get('assets/data/cars.JSON');
  }

  public calculateOrder(order: Order): Order {
    const oneDay = 24 * 60 * 60 * 1000;
    order.costs = {
      price: Math.round(Math.abs((order.pickUp.date.getTime() - order.dropOff.date.getTime()) / (oneDay))) * order.car.pricePerDay,
      deposit: order.car.deposit,
      additionalCosts: [{ name: 'Opłata przygotowawcza', price: 49 }],
      additionalCostsOnDemand: [
        { name: 'Nawigacja GPS', price: 19, demand: false },
        { name: 'Łańcuchy na koła', price: 19, demand: false },
        { name: 'Fotelik 15-36kg', price: 19, demand: false },
        { name: 'Wyjazd za granicę(kraje UE)', price: 249, demand: false }
      ]
    };
    console.log(order.pickUp.date.getHours());
    const nightPrice = ((order.pickUp.date.getHours() >= 22 || order.pickUp.date.getHours() < 6) ? 199 : 0) +
      ((order.dropOff.date.getHours() >= 22 || order.dropOff.date.getHours() < 6) ? 199 : 0);
    if (nightPrice !== 0) {
      order.costs.additionalCosts.push({
        name: 'Opłata za wydanie lub odbiór nocny (tj. od 22:00 do 6:00',
        price: nightPrice
      });
    }

    if (order.pickUp.place !== order.dropOff.place) {
      order.costs.additionalCosts.push({
        name: 'Zwrot auta w innym oddziale',
        price: 249
      });
    }

    return order;
  }

  public booking(order: Order) {
    console.log(order);
  }
}

