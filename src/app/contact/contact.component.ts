import { Component, OnInit } from '@angular/core';
import { faBolt } from '@fortawesome/free-solid-svg-icons';
import { faKeyboard } from '@fortawesome/free-solid-svg-icons';
import { faRocket } from '@fortawesome/free-solid-svg-icons';
import { faDribbble } from '@fortawesome/free-brands-svg-icons';
import { faPlusCircle } from '@fortawesome/free-solid-svg-icons';

import { faUser } from '@fortawesome/free-solid-svg-icons';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faExclamationTriangle } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  faBolt = faBolt;
  faKeyboard = faKeyboard;
  faRocket = faRocket;
  faDribbble = faDribbble;
  faPlusCircle = faPlusCircle;

  faUser = faUser;
  faCheck = faCheck;
  faEnvelope = faEnvelope;
  faExclamationTriangle = faExclamationTriangle;

  constructor() { }

  ngOnInit() {
  }

}
