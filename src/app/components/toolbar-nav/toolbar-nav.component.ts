import { Animations } from './../../animations/animations';
import { Component, OnInit, Input } from '@angular/core';

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
    { id: 1, display: 'About', url: '/About' },
    { id: 2, display: 'Resume', url: '/Resume' },
    { id: 3, display: 'Work', url: '/Work' },
    { id: 4, display: 'Activism', url: '/Activism' },
    { id: 5, display: 'Contact', url: '/Contact' }
  ];

  constructor() { }

  ngOnInit() {
  }

}
