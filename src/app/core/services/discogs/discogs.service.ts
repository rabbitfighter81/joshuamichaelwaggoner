import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable, OnDestroy, OnInit } from '@angular/core';
import { PageEvent } from '@angular/material';
import { BehaviorSubject, Observable, Subscription } from 'rxjs';
import { map, retry } from 'rxjs/operators';
import { environment } from '../../../../environments/environment';
import { unsubscribeAll } from '../../helpers/unsubscribe.helper';
import { IDiscogRecord, Record } from '../../models/discogs-record.model';
import { Pagination } from '../../models/pagination.model';

const initialPagination: Pagination = {
  pageIndex: 0,
  pageSize: 10,
};

@Injectable()
export class DiscogsService implements OnInit, OnDestroy {
  logging = false;

  username = environment.discogsConsumerUsername;
  key = environment.discogsConsumerKey;
  secret = environment.discogsConsumerSecret;

  urlBase = 'https://api.discogs.com';

  urlFolders = this.urlBase + `/users/${
    this.username
  }/collection/folders`;

  urlAllFolders = this.urlBase + `/users/${
    this.username
  }/collection/folders/0/releases`;

  private records$: Subscription;
  private folders$: Subscription;

  records: BehaviorSubject<Record[]> = new BehaviorSubject<Record[]>([]);
  folders: BehaviorSubject<any> = new BehaviorSubject<any>(null);
  pagination: BehaviorSubject<Pagination> = new BehaviorSubject<Pagination>(initialPagination);
  totalRecords: BehaviorSubject<number> = new BehaviorSubject<number>(0);

  constructor(private http: HttpClient) {}

  ngOnInit() {
  }

  ngOnDestroy() {
    const subscriptions = [
      this.records$,
      this.folders$,
    ];
    unsubscribeAll(subscriptions);
  }

  private onRecordsUpdate(data: any): void {
    const { releases, pagination } = data;
    const { items: totalRecoreds } = pagination;

    this.totalRecords.next(totalRecoreds);
    // TODO: Type...
    this.records.next(
      releases.map((record: IDiscogRecord): Record => new Record(record)),
    );
    if (this.logging) {
      console.log(`Records data from ${ this.urlAllFolders }`, releases);
    }
  }

  private onRecordsError(error: any): void {
    if (this.logging) {
      console.log('Error fetching Record data from API at ${ this.urlAllFolders }: ', error);
    }
  }

  private onFoldersUpdate(folders: any): void {
    if (folders) {
      if (this.logging) {
        console.log('Folders: ', folders);
      }
      this.folders.next(folders);
    }
  }

  private onFoldersError(error: any): void {
    if (this.logging) {
      console.log('Error fetching Folder data from API: ', error);
    }
  }

  callGetRecords(pagination: Pagination): void {
    this.records$ = this.getRecords(pagination).subscribe(
      (res: any) => this.onRecordsUpdate(res),
      (err: HttpErrorResponse | ErrorEvent) => this.onRecordsError(err),
    );
  }

  callGetFolders(): void {
    this.records$ = this.getFolders().subscribe(
      (res: any) => this.onFoldersUpdate(res),
      (err: HttpErrorResponse | ErrorEvent) => this.onFoldersError(err),
    );
  }

  getRecords(pagination: Pagination): Observable<any> {
    const pageSize = JSON.stringify(pagination.pageSize);
    const page = JSON.stringify(pagination.pageIndex + 1);
    const { key, secret } = this;
    return this.http.get<any>(`${ this.urlAllFolders }?per_page=${
      pageSize
    }&key=${
      key
    }&secret=${
      secret
    }&page=${
      page
    }`).pipe(
      retry(1),
      map(data => data),
    );
  }

  getFolders(): Observable<any> {
    return this.http.get<any>(this.urlFolders).pipe(
      retry(1),
      map(data => data),
    );
  }

  setPagination(event: PageEvent): void {
    const { pageSize, pageIndex } = event;
    this.pagination.next({
      pageSize,
      pageIndex
    });
  }

}
