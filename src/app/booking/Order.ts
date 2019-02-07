import { Car } from '../car/car';

export class Order {
    car: Car;
    pickUp: SimpleMeet;
    dropOff: SimpleMeet;
    costs?: Costs;

    constructor() {
        this.pickUp = {
            date: new Date(),
            place: ''
        };
        this.dropOff = {
            date: new Date(),
            place: ''
        };
        this.pickUp.date.setDate(this.dropOff.date.getDate() + 1);
        this.dropOff.date.setDate(this.dropOff.date.getDate() + 2);
    }
}

export interface SimpleMeet {
    date: Date;
    place: string;
}

export interface Costs {
    price: number;
    deposit: number;
    additionalCosts: Array<AdditionalCost>;
    additionalCostsOnDemand: Array<AdditionalCostOnDemand>;
}

export interface AdditionalCost {
    name: string;
    price: number;
}

export interface AdditionalCostOnDemand extends AdditionalCost {
    demand: boolean;
}

export class Person {
    name: string;
    surname: string;
    email: string;
    PESEL: string;
    phone: string;
    idCardNumber: string;

    constructor() {
        this.name = '';
        this.surname = '';
        this.email = '';
        this.PESEL = '';
        this.phone = '';
        this.idCardNumber = '';
    }
}

export interface Reservation {
    order: Order;
    person: Person;
}
