import { Greyhound } from '../../models/greyhound.model';
import { BehaviorSubject, of, Observable } from 'rxjs';
import { OnInit, OnDestroy } from '@angular/core';

export class GreyhoundServiceMock implements OnInit, OnDestroy {
  greyhounds: BehaviorSubject<Greyhound[]> = new BehaviorSubject<Greyhound[]>(
    [],
  );
  ngOnInit() {}
  ngOnDestroy() {}
  callGetGreyhounds(): void {}
  getGreyhounds(): Observable<any> {
    return new Observable();
  }
  onGreyhoundUpdate(response: Greyhound[]): void {}
  onGreyhoundError(error: any): void {}
  get url(): string {
    return `/api/greyhounds`;
  }
}
