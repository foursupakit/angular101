import { Component, OnInit } from '@angular/core';
import { faImage } from '@fortawesome/free-solid-svg-icons';
import { faMusic } from '@fortawesome/free-solid-svg-icons';
import { faFilm } from '@fortawesome/free-solid-svg-icons';
import { faFileAlt } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  faImage = faImage;
  faMusic = faMusic;
  faFilm = faFilm;
  faFileAlt = faFileAlt;

  constructor() { }

  ngOnInit() {
  }

}
