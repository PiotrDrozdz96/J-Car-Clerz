import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['../informations.component.css']
})
export class ListComponent implements OnInit {

  @Input() header: string;
  @Input() list: Array<string>;

  constructor() { }

  ngOnInit() {
  }

}
