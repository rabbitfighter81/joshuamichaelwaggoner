import { OnDestroy, OnInit } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

export class DiscogsServiceMock implements OnInit, OnDestroy {
  logging = true;
  records: BehaviorSubject<any> = new BehaviorSubject<any>([]);
  folders: BehaviorSubject<any> = new BehaviorSubject<any>([]);
  pagination: BehaviorSubject<any> = new BehaviorSubject<any>(0);
  totalRecords: BehaviorSubject<number> = new BehaviorSubject<number>(200);
  release: BehaviorSubject<any> = new BehaviorSubject<any>(null);
  ngOnInit() {}
  ngOnDestroy() {}
  callGetRecords(): void {}
  callGetFolders(): void {}
  callGetReleaseById(): void {}
  getRecords(): Observable<any> {
    return new Observable();
  }
  get apiUrl(): string {
    return `/api/records`;
  }
}
