import { Component, OnInit } from '@angular/core';

import { NavbarItem } from '../nav/navbarItem';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  list: Array<NavbarItem>;

  constructor() { }

  ngOnInit() {
    this.list = [
      { title: 'Oferta', href: 'flota'},
      { title: 'Promocje', href: ''},
      { title: 'Flota', href: 'flota'},
      { title: 'O firmie', href: ''},
      { title: 'Kontakt', href: ''},
      { title: 'Regulamin', href: ''},
      { title: 'Polityka Prywatności', href: ''}
    ];
  }

}
