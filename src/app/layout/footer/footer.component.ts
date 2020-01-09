import { Component, OnInit } from '@angular/core';
import {  } from '@fortawesome/free-solid-svg-icons';
import { faColumns } from '@fortawesome/free-solid-svg-icons';
import { faWpforms } from '@fortawesome/free-brands-svg-icons';
import { faCubes } from '@fortawesome/free-solid-svg-icons';
import { faCogs } from '@fortawesome/free-solid-svg-icons';
import { faWarehouse } from '@fortawesome/free-solid-svg-icons';
import { faCube } from '@fortawesome/free-solid-svg-icons';

import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faFacebookSquare } from '@fortawesome/free-brands-svg-icons';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faDiscord } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  faColumns = faColumns;
  faWpforms = faWpforms;
  faCubes = faCubes;
  faCogs = faCogs;
  faWarehouse = faWarehouse;
  faCube = faCube;

  faGithub = faGithub;
  faFacebookSquare = faFacebookSquare;
  faInstagram = faInstagram;
  faTwitter = faTwitter;
  faDiscord = faDiscord;

  constructor() { }

  ngOnInit() {
  }

}
