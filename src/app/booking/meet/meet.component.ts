import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Meet } from './meet';

@Component({
  selector: 'app-meet',
  templateUrl: './meet.component.html',
  styleUrls: ['./meet.component.css']
})
export class MeetComponent implements OnInit {

  @Input() placeholder: string;
  @Input() meet: Meet;
  @Input() cities: Array<string>;

  @Output() changeEmitter: EventEmitter<void> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  public change() {
    this.meet.checkHours();
    this.changeEmitter.emit();
  }

}
