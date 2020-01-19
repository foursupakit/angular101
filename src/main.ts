import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

import * as $ from 'jquery';

if (environment.production) {
  enableProdMode();
}

// mouse cursor
platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));

/*
const root = document.querySelector('html');

// Real cursor element
const cursor = document.createElement('div');
cursor.classList.add('cursor');
root.appendChild(cursor);


// Following extra cursor element
const follower = document.createElement('div');
follower.classList.add('cursor', 'cursor__follower');
root.appendChild(follower);


root.addEventListener('mousemove', (e) => {
  setPosition(follower, e);
  setPosition(cursor, e);
});

function setPosition(element, e) {
  // element.style.transform = `translate3d(${e.clientX}px, ${e.clientY}px, 0)`;
  element.style.left = `${e.clientX}px`;
  element.style.top = `${e.clientY}px`;
}
*/
