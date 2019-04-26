import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  @ViewChild('sidenav') sidenav: MatSidenav;

  open = false;
  reason = '';
  shouldRun = true;
  toolbarOpened = false;

  navItems = [
    { id: 1, display: 'Resume', url: '/Resume' },
    { id: 2, display: 'Work', url: '/Work' },
    { id: 3, display: 'Networks', url: '/Networks' },
    { id: 4, display: 'Greyhounds', url: '/Greyounds' },
    { id: 5, display: 'Contact', url: '/Contact' }
  ];

  constructor() {}

  ngOnInit() {}

  close(reason: string): void {
    this.reason = reason;
    this.sidenav.close();
    this.open = false;
  }

  toggleSidenav() {
    if (this.open) {
      this.sidenav.close();
    } else {
      this.sidenav.open();
    }
    this.open = !this.open;
  }

  onOpen(): void {
    this.toolbarOpened = true;
  }

  onClose(): void {
    this.toolbarOpened = false;
  }

}
