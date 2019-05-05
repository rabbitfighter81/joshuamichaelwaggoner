import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { GreyhoundService } from 'src/app/core/services/greyhound/greyhound.service';
import { Subscription } from 'rxjs';

interface GreyhoundRouteParamMap {
  greyhound: string;
}

@Component({
  selector: 'app-greyhound-detail',
  templateUrl: './greyhound-detail.component.html',
  styleUrls: ['./greyhound-detail.component.scss']
})
export class GreyhoundDetailComponent implements OnInit, OnDestroy {

  private greyhound$: Subscription;
  name: string;
  src: string;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private service: GreyhoundService
  ) {}

  ngOnInit() {
    this.greyhound$ = this.route.params.subscribe((params: GreyhoundRouteParamMap) => {
      if (params) {
        const { greyhound: name } = params;
        this.name = name;
      }
    });
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
    return this.name
      ? this.getImgSrcByName(this.name)
      : null;
  }

}
