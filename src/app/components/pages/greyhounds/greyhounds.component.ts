import { Component, OnInit, OnDestroy, AfterViewInit } from '@angular/core';
import { Greyhound } from '../../../core/models/greyhound.model';
import { GreyhoundService } from 'src/app/core/services/greyhound/greyhound.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-greyhounds',
  templateUrl: './greyhounds.component.html',
  styleUrls: ['./greyhounds.component.scss']
})
export class GreyhoundsComponent implements OnInit, OnDestroy, AfterViewInit {

  private greyhounds$: Subscription;
  greyhounds: Greyhound[];

  ready = false;

  constructor(private service: GreyhoundService) {
  }

  ngOnInit() {
    this.greyhounds$ = this.service.greyhounds.subscribe(next => this.onGreyhoundsUpdate(next));
  }

  ngOnDestroy() {
    if (this.greyhounds$ != null) {
      this.greyhounds$.unsubscribe();
    }
  }

  ngAfterViewInit() {
    this.ready = true;
    this.service.callGetGreyhounds();
  }

  onGreyhoundsUpdate(greyhounds: Greyhound[]) {
    if (greyhounds) {
      this.greyhounds = greyhounds;
    }
  }

}
