import { Component, OnDestroy, OnInit, ViewChild, Inject, LOCALE_ID } from '@angular/core';
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

  navOpen = false;

  router$: Subscription;

  constructor(
    @Inject(LOCALE_ID) protected localeId: string,
    private router: Router
    ) {}

  ngOnInit() {
    this.router$ = this.router.events.subscribe(next => this.onRouteUpdated(next));
  }

  ngOnDestroy() {
    this.router$.unsubscribe();
  }

  private onRouteUpdated(event: any): void {
    if (event instanceof NavigationEnd) {
      document.body.scrollTop = 0;
      if (this.navOpen) {
        this.close();
      }
    }
  }

  close(): void {
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
