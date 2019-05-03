import { HttpClient } from '@angular/common/http';
import { Injectable, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, BehaviorSubject } from 'rxjs';
import { map, retry } from 'rxjs/operators';
import { Greyhound } from '../../models/greyhound.model';

@Injectable({ providedIn: 'root' })
export class GreyhoundService implements OnInit, OnDestroy {

  greyhounds: BehaviorSubject<Greyhound[]> = new BehaviorSubject<Greyhound[]>([]);

  constructor(private http: HttpClient, private router: Router) {}

  ngOnInit() {
    this.callGetGreyhounds();
  }

  ngOnDestroy() {
  }

  callGetGreyhounds(): void {
    this.getGreyhounds().subscribe(
      next => this.onGreyhoundUpdate(next),
      err => this.onGreyhoundError(err)
    );
  }

  onGreyhoundUpdate(greyhounds: Greyhound[]): void {
    this.greyhounds.next(greyhounds)
    console.log(`Greyhounds data from ${ this.url }`, greyhounds);
  }

  onGreyhoundError(error: any): void {
    console.log('Error fetching greyhound data from API: ', error);
  }

  getGreyhounds(): Observable<Greyhound[]> {
    return this.http.get<Greyhound[]>(this.url).pipe(
      retry(1),
      map((data: any) => data.greyhounds),
    );
  }

  get url(): string {
    return `${ window.location.origin }/api/greyhounds`;
  }
}
