import { Component, Inject, LOCALE_ID, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { NavigationEnd, NavigationStart, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { smoothScrollTop } from '../core/helpers/smooth-scroll-top';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit, OnDestroy {
  @ViewChild('sidenav') sidenav: MatSidenav;

  navOpen = false;
  router$: Subscription;

  constructor(
    @Inject(LOCALE_ID) protected localeId: string,
    private router: Router,
  ) {}

  ngOnInit() {
    this.router$ = this.router.events.subscribe(next =>
      this.onRouteUpdated(next),
    );
  }

  ngOnDestroy() {
    if (this.router$ != null) {
      this.router$.unsubscribe();
    }
  }

  private onRouteUpdated(event: any): void {
    if (event instanceof NavigationEnd) {
      smoothScrollTop();
    }
    if (event instanceof NavigationStart) {
      if (this.navOpen) {
        this.closeSidenav();
        this.navOpen = !this.navOpen;
      }
    }
  }

  closeSidenav(): void {
    this.sidenav.close();
    this.navOpen = false;
  }

  toggleSidenav(): void {
    if (this.navOpen) {
      this.sidenav.close();
    } else {
      this.sidenav.open();
    }
    this.navOpen = !this.navOpen;
  }
}
