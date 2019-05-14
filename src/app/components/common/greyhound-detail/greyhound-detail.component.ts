import { AfterViewInit, Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import findIndex from 'lodash.findindex';
import { Subscription } from 'rxjs';
import { unsubscribeAll } from '../../../core/helpers/unsubscribe.helper';
import { Greyhound } from '../../../core/models/greyhound.model';
import { GreyhoundService } from '../../../core/services/greyhound/greyhound.service';

interface GreyhoundRouteParamMap {
  greyhound: string;
}

@Component({
  selector: 'app-greyhound-detail',
  templateUrl: './greyhound-detail.component.html',
  styleUrls: ['./greyhound-detail.component.scss'],
})
export class GreyhoundDetailComponent
  implements OnInit, AfterViewInit, OnDestroy {
  private route$: Subscription;
  private greyhounds$: Subscription;

  greyhound: Greyhound;
  route: string;

  constructor(
    private activatedRoute: ActivatedRoute,
    private service: GreyhoundService,
  ) {}

  ngOnInit() {
    this.route$ = this.activatedRoute.params.subscribe(
      (params: GreyhoundRouteParamMap) => {
        this.route = params.greyhound;
      },
    );
    this.greyhounds$ = this.service.greyhounds.subscribe(next =>
      this.onGreyhoundsUpdate(next),
    );
  }

  ngAfterViewInit() {
    this.service.callGetGreyhounds();
  }

  ngOnDestroy() {
    const subscriptions = [this.route$, this.greyhounds$];
    unsubscribeAll(subscriptions);
  }

  private onGreyhoundsUpdate(greyhounds: Greyhound[]): void {
    const { route } = this;
    const index = findIndex(greyhounds, { route });
    if (index > -1) {
      this.greyhound = greyhounds[index];
    }
  }

  getImgSrcByName(name: string): string {
    switch (name) {
      case 'raven':
        return 'raven.jpg';
      case 'redd':
        return 'redd-walker.jpg';
      case 'gabby':
        return 'poco-gabby.jpg';
      default:
        return 'poco-gabby.jpg';
    }
  }

  get image(): string | null {
    return this.greyhound && this.greyhound.route
      ? this.getImgSrcByName(this.greyhound.route)
      : null;
  }
}
