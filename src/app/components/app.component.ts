import {
  Component,
  OnDestroy,
  OnInit,
  ViewChild,
  Inject,
  LOCALE_ID,
} from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { NavigationEnd, Router, NavigationStart } from '@angular/router';
import { Subscription } from 'rxjs';

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
      this.smoothScrollTop();
    }
    if (event instanceof NavigationStart) {
      if (this.navOpen) {
        this.closeSidenav();
        this.navOpen = !this.navOpen;
      }
    }
  }

  private smoothScrollTop(): void {
    const scrollToTop = window.setInterval(() => {
      const pos: number = window.pageYOffset;
      if (pos > 0) {
        window.scrollTo(0, pos - 20); // how far to scroll on each step
      } else {
        window.clearInterval(scrollToTop);
      }
    }, 16);
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
