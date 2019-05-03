import { Component, OnInit, OnDestroy } from '@angular/core';
import { Greyhound } from '../../../core/models/greyhound.model';
import { GreyhoundService } from 'src/app/core/services/greyhound/greyhound.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-greyhounds',
  templateUrl: './greyhounds.component.html',
  styleUrls: ['./greyhounds.component.scss']
})
export class GreyhoundsComponent implements OnInit, OnDestroy {

  private greyhounds$: Subscription;
  greyhounds: Greyhound[];

  /*
  greyhounds: Greyhound[] = [
    {
      name: 'Redd Walker',
      born: 'Oct 23, 2000',
      passed: 'Feb 8, 2012',
      image: 'redd-walker.png',
      descriptions: ['abc', 'qer']
    } as Greyhound,
    {
      name: 'Poco Gabby',
      born: 'Mar 1, 2005',
      passed: 'Apr 2, 2018',
      image: 'poco-gabby.png',
      descriptions: ['abc', 'qer']
    } as Greyhound,
    {
      name: 'Raven',
      born: 'January 18, 2015',
      passed: 'Present',
      image: 'raven.png',
      descriptions: ['abc', 'qer']
    } as Greyhound,
  ];
  */

  constructor(private service: GreyhoundService) { }

  ngOnInit() {
    this.greyhounds$ = this.service.greyhounds.subscribe(next => this.onGreyhoundsUpdate(next));
  }

  ngOnDestroy() {
    if (this.greyhounds$ != null) {
      this.greyhounds$.unsubscribe();
    }
  }

  onGreyhoundsUpdate(greyhounds: Greyhound[]) {
    if (greyhounds) {
      this.greyhounds = greyhounds;
      console.log('data', this.service.greyhounds);
    } else {
      console.error('No greyhound data yet...');
    }
  }

}
