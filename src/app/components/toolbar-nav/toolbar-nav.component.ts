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
    { id: 1, display: 'About', url: '/about' },
    { id: 2, display: 'Resume', url: '/resume' },
    { id: 3, display: 'Work', url: '/work' },
    { id: 4, display: 'Activism', url: '/activism' },
    { id: 5, display: 'Contact', url: '/contact' }
  ];

  constructor() { }

  ngOnInit() {
  }

}
