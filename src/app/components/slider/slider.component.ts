import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss']
})
export class SliderComponent implements OnInit {
  public imagesUrl;

  constructor() { }

  ngOnInit() {
    this.imagesUrl = ['../assets/img/pic1.jpg', '../assets/img/pic2.jpg', '../assets/img/pic3.jpg'];
  }

}
