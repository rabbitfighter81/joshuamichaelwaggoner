import { Component, Input, OnInit } from '@angular/core';
import { Animations } from './../../animations/animations';

@Component({
  selector: 'app-toolbar-nav',
  templateUrl: './toolbar-nav.component.html',
  styleUrls: ['./toolbar-nav.component.scss'],
  animations: [
    Animations.navItems,
    Animations.dropDownAnimation
  ]
})
export class ToolbarNavComponent implements OnInit {

  @Input() toolbarOpened: boolean;

  navItems = [
    { id: 1, display: 'Resume', url: '/Resume' },
    { id: 2, display: 'Work', url: '/Work' },
    { id: 3, display: 'Networks', url: '/Networks' },
    { id: 4, display: 'Greyhounds', url: '/Greyounds' },
    { id: 5, display: 'Contact', url: '/Contact' }
  ];

  constructor() { }

  ngOnInit() {
  }

}
