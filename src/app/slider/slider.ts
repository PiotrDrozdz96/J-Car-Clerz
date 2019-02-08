import { OnInit } from '@angular/core';

export class Slider implements OnInit {

    list: Array<any>;
    currentIndex = 0;

    ngOnInit() {
    }

    public left() {
        this.currentIndex = this.currentIndex === 0 ? this.list.length - 1 : this.currentIndex - 1;
    }

    public right() {
        this.currentIndex = this.currentIndex === this.list.length - 1 ? 0 : this.currentIndex + 1;
    }
}
