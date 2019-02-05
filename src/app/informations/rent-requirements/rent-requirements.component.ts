import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-rent-requirements',
  templateUrl: './rent-requirements.component.html',
  styleUrls: ['../informations.component.css']
})
export class RentRequirementsComponent implements OnInit {

  general: Array<string> = [
    'Wiek klienta min. 21 lat',
    'Prawo jazdy min. 2 lata',
    'karta kredytowa lub debetowa',
    'kaucja zwrotna'
  ];

  documents: Array<string> = [
    'dowód osobisty',
    'prawo jazdy',
    'karta kredytowa lub debetowa'
  ];

  constructor() { }

  ngOnInit() {
  }

}
