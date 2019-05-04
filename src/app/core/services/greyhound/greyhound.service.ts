import { HttpClient } from '@angular/common/http';
import { Injectable, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, BehaviorSubject, Subscription } from 'rxjs';
import { map, retry } from 'rxjs/operators';
import { Greyhound } from '../../models/greyhound.model';

@Injectable()
export class GreyhoundService implements OnInit, OnDestroy {

  logging = false;

  private greyhounds$: Subscription;
  greyhounds: BehaviorSubject<Greyhound[]> = new BehaviorSubject<Greyhound[]>([]);

  constructor(private http: HttpClient) {
  }

  ngOnInit() {
  }

  ngOnDestroy() {
    if (this.greyhounds$ != null) {
      this.greyhounds$.unsubscribe();
    }
  }

  callGetGreyhounds(): void {
    this.greyhounds$ = this.getGreyhounds().subscribe(
      res => this.onGreyhoundUpdate(res),
      err => this.onGreyhoundError(err)
    );
  }

  onGreyhoundUpdate(response: Greyhound[]): void {
    if (response) {
      this.greyhounds.next(response);
      if (this.logging) {
        console.log(`Greyhounds data from ${ this.url }`, response);
      }
    }
  }

  onGreyhoundError(error: any): void {
    if (this.logging) {
      console.log('Error fetching greyhound data from API: ', error);
    }
  }

  getGreyhounds(): Observable<any> {
    return this.http.get(`${ window.location.origin }/api/greyhounds`).pipe(
      retry(1),
      map(data => data),
    );
  }

  get url(): string {
    return `${ window.location.origin }/api/greyhounds`;
  }
}
