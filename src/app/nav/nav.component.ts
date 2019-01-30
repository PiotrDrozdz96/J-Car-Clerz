import { Component, OnInit } from '@angular/core';

import { NavbarItem } from './navbarItem';
import { Observable, fromEvent } from 'rxjs';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  onItem: any;
  list: Array<NavbarItem>;

  constructor() { }

  ngOnInit() {
    this.list = [
      {
        title: 'Oferta', dropdown: [
          { title: 'Oferta1', href: '' },
          { title: 'Oferta2', href: '' },
          { title: 'Oferta3', href: '' },
          { title: 'Oferta4', href: '' }
        ]
      },
      {
        title: 'Promocje', dropdown: [
          { title: 'Promocja1', href: '' },
          { title: 'Promocja2', href: '' },
          { title: 'Promocja3', href: '' },
          { title: 'Promocja4', href: '' }
        ]
      },
      {
        title: 'Flota', dropdown: [
          { title: 'Osobowe', href: '' },
          { title: 'Automaty', href: '' },
          { title: 'VAN', href: '' },
          { title: 'Dostawcze', href: '' }
        ]
      },
      {
        title: 'O firmie', dropdown: [
          { title: 'Informacje', href: '' },
          { title: 'Kontakt', href: '' },
          { title: 'Filmy', href: '' },
          { title: 'Reklamacje', href: '' }
        ]
      }
    ];
  }

  secondClick() {
    let on = false;
    const observable = fromEvent(window, 'click').subscribe((event: MouseEvent) => {
      if (on) {
        observable.unsubscribe();
        if (event.pageY < 55) {
          const htmlElement = document.elementFromPoint(event.pageX, event.pageY) as HTMLElement;
          htmlElement.click();
        }
      } else { on = true; }
    });
  }

}
