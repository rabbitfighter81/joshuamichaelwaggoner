import { Component, OnDestroy, OnInit, AfterViewInit } from '@angular/core';
import { ActivatedRoute, Router, ChildActivationStart } from '@angular/router';
import { GreyhoundService } from '../../../core/services/greyhound/greyhound.service';
import { Subscription } from 'rxjs';
import { Greyhound, IGreyhound } from '../../../core/models/greyhound.model';
import { findIndex } from 'lodash';

interface GreyhoundRouteParamMap {
  greyhound: string;
}

@Component({
  selector: 'app-greyhound-detail',
  templateUrl: './greyhound-detail.component.html',
  styleUrls: ['./greyhound-detail.component.scss']
})
export class GreyhoundDetailComponent implements OnInit, AfterViewInit, OnDestroy {

  private greyhound$: Subscription;

  greyhound: Greyhound;

  x: string;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private service: GreyhoundService
  ) {
    this.service.callGetGreyhounds();
  }

  ngOnInit() {
    this.greyhound$ = this.route.params.subscribe((params: GreyhoundRouteParamMap) => {
      console.log('params: ', params);
      if (params) {
        const { greyhound } = params;
        this.x = greyhound;
      }
    });
  }

  private onGreyhoundsUpdate(greyhounds: IGreyhound[]) {
    const dogs = greyhounds.map(x => new Greyhound(x));
    const index = findIndex(dogs, { route: this.x });
    if (index > -1) {
      this.greyhound = dogs[index];
      console.log('xxxx', this.greyhound);
    }
  }

  ngAfterViewInit() {
    this.service.getGreyhounds().subscribe(
      res => this.onGreyhoundsUpdate(res),
      err => console.log(err),
    );
  }


  ngOnDestroy() {
    if (this.greyhound$ != null) {
      this.greyhound$.unsubscribe();
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
    return this.greyhound && this.greyhound.name
      ? this.getImgSrcByName(this.greyhound.name)
      : null;
  }

}
