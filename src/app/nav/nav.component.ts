import { Component, OnInit } from '@angular/core';
import { Observable, fromEvent } from 'rxjs';
import { Router } from '@angular/router';

import { NavbarItem } from './navbarItem';


@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  onItem: any;
  list: Array<NavbarItem>;

  constructor(private router: Router) { }

  ngOnInit() {
    this.list = [
      {
        title: 'Oferta', dropdown: [
          { title: 'Flota - Cennik z VAT', href: 'flota' },
          { title: 'Wynajem', href: 'wynajem' },
          { title: 'Warunki wynajmu', href: 'warunki-wynajmu' }
        ]
      },
      {
        title: 'Promocje', dropdown: [
          { title: 'BMW X2 za 299zł z VAT', href: 'car/bmw_x2' },
          { title: 'BMW 1 za 199zł z VAT', href: 'car/bmw_1' }
        ]
      },
      {
        title: 'Flota', href: 'flota'
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

  public secondClick() {
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

  public goHome() {
    this.router.navigate(['']);
  }

}
