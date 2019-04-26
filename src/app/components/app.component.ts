import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { NavigationEnd, Router } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {

  @ViewChild('sidenav') sidenav: MatSidenav;

  open = false;
  shouldRun = true;

  navItems = [
    { id: 1, display: 'Resume', url: '/Resume' },
    { id: 2, display: 'Work', url: '/Work' },
    { id: 3, display: 'Networks', url: '/Networks' },
    { id: 4, display: 'Greyhounds', url: '/Greyounds' },
    { id: 5, display: 'Contact', url: '/Contact' }
  ];

  router$: Subscription;

  constructor(private router: Router) {}

  ngOnInit() {
    this.router$ = this.router.events.subscribe(next => this.onRouteUpdated(next));
  }

  ngOnDestroy() {
    this.router$.unsubscribe();
  }

  private onRouteUpdated(event: any): void {
    if (event instanceof NavigationEnd) {
      document.body.scrollTop = 0;
    }
  }

  close(reason: string): void {
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

}
