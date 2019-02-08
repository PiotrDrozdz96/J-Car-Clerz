import { Component } from '@angular/core';

import { Slider } from '../slider';

import { News } from '../../informations/news/news';

import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-slider-news',
  templateUrl: './slider-news.component.html',
  styleUrls: ['../slider.component.css']
})
export class SliderNewsComponent extends Slider {

  list: Array<News>;
  slideTime = 8000;

  constructor(private api: ApiService) {
    super();
    this.api.getNews().subscribe(news => {
      this.list = news;
    });
  }

}
