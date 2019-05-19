import { HttpClient } from '@angular/common/http';
import { Injectable, OnDestroy, OnInit } from '@angular/core';
import { BehaviorSubject, Observable, Subscription } from 'rxjs';
import { map, retry } from 'rxjs/operators';
import { Greyhound, IGreyhound } from '../../models/greyhound.model';
import { environment } from 'src/environments/environment';

@Injectable()
export class GreyhoundService implements OnInit, OnDestroy {
  logging = false;

  urlBase: string;

  private greyhounds$: Subscription;
  greyhounds: BehaviorSubject<Greyhound[]> = new BehaviorSubject<Greyhound[]>(
    [],
  );

  constructor(private http: HttpClient) {
    this.urlBase = environment.apiUrl;
  }

  ngOnInit() {
    this.callGetGreyhounds();
  }

  ngOnDestroy() {
    if (this.greyhounds$ != null) {
      this.greyhounds$.unsubscribe();
    }
  }

  private onGreyhoundUpdate(response: IGreyhound[]): void {
    if (response) {
      this.greyhounds.next(response.map(x => new Greyhound(x)));
      if (this.logging) {
        console.log(`Greyhounds data from ${ this.url }`, response);
      }
    }
  }

  private onGreyhoundError(error: any): void {
    if (this.logging) {
      console.log('Error fetching greyhound data from API: ', error);
    }
  }

  callGetGreyhounds(): void {
    this.greyhounds$ = this.getGreyhounds().subscribe(
      res => this.onGreyhoundUpdate(res),
      err => this.onGreyhoundError(err),
    );
  }

  getGreyhounds(): Observable<IGreyhound[]> {
    return this.http.get<IGreyhound[]>(this.url).pipe(
      retry(1),
      map(data => data),
    );
  }

  get url(): string {
    return this.urlBase + '/api/greyhounds';
  }

}
