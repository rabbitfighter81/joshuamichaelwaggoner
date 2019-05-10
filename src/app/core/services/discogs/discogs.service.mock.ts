import { OnDestroy, OnInit } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

export class DiscogsServiceMock implements OnInit, OnDestroy {
  logging = true;
  records: BehaviorSubject<any> = new BehaviorSubject<any>([]);
  ngOnInit() {}
  ngOnDestroy() {}
  callGetRecords(): void {}
  callGetFolders(): void {}
  getRecords(): Observable<any> {
    return new Observable();
  }
  get apiUrl(): string {
    return `/api/records`;
  }
}
