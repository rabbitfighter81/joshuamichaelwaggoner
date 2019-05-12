import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable, OnDestroy, OnInit } from '@angular/core';
import { PageEvent } from '@angular/material';
import { BehaviorSubject, Observable, Subscription } from 'rxjs';
import { map, retry, tap } from 'rxjs/operators';
import { environment } from '../../../../environments/environment';
import { unsubscribeAll } from '../../helpers/unsubscribe.helper';
import { IDiscogRecord, Record } from '../../models/discogs-record.model';
import { Pagination } from '../../models/pagination.model';
import { Release } from '../../models/release.model';

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

  urlRelease = this.urlBase + `/releases`;

  urlFolders = this.urlBase + `/users/${
    this.username
  }/collection/folders`;

  urlAllFolders = this.urlBase + `/users/${
    this.username
  }/collection/folders/0/releases`;

  private records$: Subscription;
  private folders$: Subscription;
  private release$: Subscription;

  records: BehaviorSubject<Record[]> = new BehaviorSubject<Record[]>([]);
  release: BehaviorSubject<any> = new BehaviorSubject<any>(null);
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
      this.release$,
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

  private onReleaseByIdUpdate(release: any): void {
    if (release) {
      if (this.logging) {
        console.log('Release: ', release.videos);
      }
      const next = new Release(release);
      this.release.next(next);
    }
  }

  private onReleaseByIdError(error: any): void {
    if (this.logging) {
      console.log('Error fetching Release data from API: ', error);
    }
  }

  callGetRecords(pagination: Pagination): void {
    this.records$ = this.getRecords(pagination).subscribe(
      (res: any) => this.onRecordsUpdate(res),
      (err: HttpErrorResponse | ErrorEvent) => this.onRecordsError(err),
    );
  }

  callGetReleaseById(releaseId: string): void {
    this.release$ = this.getReleaseById(releaseId).subscribe(
      (res: any) => this.onReleaseByIdUpdate(res),
      (err: HttpErrorResponse | ErrorEvent) => this.onReleaseByIdError(err),
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
    const sort = 'artist';
    return this.http.get<any>(`${ this.urlAllFolders }?per_page=${
      pageSize
    }&key=${
      key
    }&secret=${
      secret
    }&page=${
      page
    }&sort=${
      sort
    }`).pipe(
      retry(1),
      tap(data => console.log(data)),
      map(data => data),
    );
  }

  getReleaseById(releaseId: string): Observable<any> {
    const currAbbr = 'USD';
    return this.http.get<any>(`${ this.urlRelease }/${
      releaseId
    }?${
      currAbbr
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
