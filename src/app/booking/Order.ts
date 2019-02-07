import { Car } from '../car/car';

export interface Order {
    car: Car;
    pickUp: {
        date: Date,
        place: string
    };
    dropOff: {
        date: Date,
        place: string
    };
    costs?: Costs;
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

export interface Person {
    name: string;
    surname: string;
    email: string;
    PESEL: string;
    phone: string;
    idCardNumber: string;
}

export interface Reservation {
    order: Order;
    person: Person;
}
