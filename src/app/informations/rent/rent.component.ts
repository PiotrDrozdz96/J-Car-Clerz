import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-rent',
  templateUrl: './rent.component.html',
  styleUrls: ['../informations.component.css']
})
export class RentComponent implements OnInit {

  list: Array<string> = [
    'W pierwszym etapie wybierz miejsce odbioru i zwrotu pojazdu oraz określ daty i godziny wynajmu',
    'W kolejnej części wybierz model samochodu',
    'W następnym etapie wybierz dodatkowe usługi',
    'Wypełnij swoje dane osobowe',
    'Opłać wynajem'
  ];

  constructor() { }

  ngOnInit() {
  }

}
