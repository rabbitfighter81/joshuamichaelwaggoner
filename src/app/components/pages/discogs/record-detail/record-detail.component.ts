import { AfterViewInit, Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { unsubscribeAll } from '../../../../core/helpers/unsubscribe.helper';
import { Release } from '../../../../core/models/release.model';
import { DiscogsService } from '../../../../core/services/discogs/discogs.service';

interface DiscogsRouteParamMap {
  recordId: any;
}

@Component({
  selector: 'app-record-detail',
  templateUrl: './record-detail.component.html',
  styleUrls: ['./record-detail.component.scss'],
})
export class RecordDetailComponent implements OnInit, AfterViewInit, OnDestroy {
  private route$: Subscription;
  private release$: Subscription;

  embedded = 'https://www.youtube.com/embed/1ozGKlOzEVc';
  safeURL: string;

  release: Release; // TODO. YARR!!

  constructor(
    private activatedRoute: ActivatedRoute,
    private service: DiscogsService,
  ) {}

  ngOnInit() {
    this.route$ = this.activatedRoute.params.subscribe(
      (params: DiscogsRouteParamMap) => {
        this.service.callGetReleaseById(params.recordId);
      },
    );
    this.release$ = this.service.release.subscribe(next =>
      this.onReleaseUpdate(next),
    );
  }

  ngAfterViewInit() {
  }

  ngOnDestroy() {
    const subscriptions = [this.route$, this.release$];
    unsubscribeAll(subscriptions);
  }

  private onReleaseUpdate(release: any): void {
    this.release = release;
  }
}
