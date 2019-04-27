import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav-main',
  templateUrl: './nav-main.component.html',
  styleUrls: ['./nav-main.component.scss'],
})
export class NavMainComponent implements OnInit {

  navItems = [
    { id: 1, display: 'About', url: '/About' },
    { id: 2, display: 'Resume', url: '/Resume' },
    { id: 3, display: 'Work', url: '/Work' },
    { id: 4, display: 'Networks', url: '/Networks' },
    { id: 5, display: 'Greyhounds', url: '/Greyhounds' },
    { id: 6, display: 'Contact', url: '/Contact' }
  ];

  constructor() { }

  ngOnInit() {
  }

}
