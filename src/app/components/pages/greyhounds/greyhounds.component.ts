import { AfterViewInit, Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { unsubscribeAll } from '../../../core/helpers/unsubscribe.helper';
import { Greyhound } from '../../../core/models/greyhound.model';
import { GreyhoundService } from '../../../core/services/greyhound/greyhound.service';

@Component({
  selector: 'app-greyhounds',
  templateUrl: './greyhounds.component.html',
  styleUrls: ['./greyhounds.component.scss'],
})
export class GreyhoundsComponent implements OnInit, OnDestroy, AfterViewInit {
  private greyhounds$: Subscription;
  greyhounds: Greyhound[];

  constructor(private service: GreyhoundService) {}

  ngOnInit() {
    this.greyhounds$ = this.service.greyhounds.subscribe(next => this.onGreyhoundsUpdate(next));
  }

  ngOnDestroy() {
    const subscriptions = [this.greyhounds$];
    unsubscribeAll(subscriptions);
  }

  ngAfterViewInit() {
    this.service.callGetGreyhounds();
  }

  private onGreyhoundsUpdate(greyhounds: Greyhound[]): void {
    if (greyhounds) {
      this.greyhounds = greyhounds;
    }
  }
}
