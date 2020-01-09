import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  constructor() { }

  ngOnInit() {
    // Header , Navbar
    if ($('header').length) {
      $(window).scroll(() => {    // this will work when your window scrolled.
          const height = $(window).scrollTop();  // getting the scrolling height of window

          if (height > 150) {
              $('.topbar').addClass('fixed-header').addClass('animated').addClass('slideInDown');
          } else {
            $('.topbar').removeClass('fixed-header').removeClass('animated').removeClass('slideInDown');
          }
      });
    }

    // Modal log in
    $('.modal-trigger').on('click', function() {
      const modalID = $(this).attr('data-modal');
      $('#' + modalID).addClass('is-active');
    });
    $('.modal-close, .close-modal').on('click', function(){
      $(this).closest('.modal').removeClass('is-active');
    });
  }

  // Mouse Hover
  mouseOn() {
    $('.cursor').addClass('is-hover');
  }
  mouseOut() {
    $('.cursor').removeClass('is-hover');
  }

}

