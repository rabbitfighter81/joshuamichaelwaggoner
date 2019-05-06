import { Component, OnInit, OnDestroy, AfterViewInit } from '@angular/core';
import { Greyhound } from '../../../core/models/greyhound.model';
import { GreyhoundService } from '../../../core/services/greyhound/greyhound.service';
import { Subscription } from 'rxjs';

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
    this.greyhounds$ = this.service.greyhounds.subscribe(next =>
      this.onGreyhoundsUpdate(next),
    );
  }

  ngOnDestroy() {
    if (this.greyhounds$ != null) {
      this.greyhounds$.unsubscribe();
    }
  }

  ngAfterViewInit() {
    this.service.callGetGreyhounds();
  }

  private onGreyhoundsUpdate(greyhounds: Greyhound[]) {
    if (greyhounds) {
      this.greyhounds = greyhounds;
    }
  }
}
