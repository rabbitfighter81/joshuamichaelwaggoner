import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable, OnDestroy, OnInit } from '@angular/core';
import { BehaviorSubject, Observable, Subscription } from 'rxjs';
import { map, retry, tap } from 'rxjs/operators';
import { IDiscogRecord, Record } from '../../models/discogs-record.model';
import { unsubscribeAll } from '../../helpers/unsubscribe.helper';
import { environment } from '../../../../environments/environment';

@Injectable()
export class DiscogsService implements OnInit, OnDestroy {
  logging = true;

  username = environment.discogsConsumerUsername;
  key = environment.discogsConsumerKey;
  secret = environment.discogsConsumerSecret;

  urlBase = 'https://api.discogs.com';

  authParams = `?key=${ this.key }&secret=${ this.secret }`;

  urlFolders = this.urlBase + `/users/${ this.username }/collection/folders${ this.authParams }`;
  urlAllFolders = this.urlBase + `/users/${ this.username }/collection/folders/0/releases${ this.authParams }`;

  private records$: Subscription;
  private folders$: Subscription;

  records: BehaviorSubject<Record[]> = new BehaviorSubject<Record[]>([]);
  folders: BehaviorSubject<any> = new BehaviorSubject<any>(null);

  constructor(private http: HttpClient) {}

  ngOnInit() {}

  ngOnDestroy() {
    const subscriptions = [
      this.records$,
      this.folders$,
    ];
    unsubscribeAll(subscriptions);
  }

  private onRecordUpdate(releases: any): void {
    // TODO: Type...
    if (releases && releases.length) {
      this.records.next(
        releases.map((record: IDiscogRecord): Record => new Record(record)),
      );
      if (this.logging) {
        console.log(`Records data from ${ this.urlAllFolders }`, releases);
      }
    }
  }

  private onRecordError(error: any): void {
    if (this.logging) {
      console.log('Error fetching Record data from API at ${ this.urlAllFolders }: ', error);
    }
  }

  private onFoldersUpdate(folders: any): void {
    if (folders) {
      console.log('Folders: ', folders);
      this.folders.next(folders);
    }
  }

  private onFoldersError(error: any): void {
    if (this.logging) {
      console.log('Error fetching Folder data from API: ', error);
    }
  }

  callGetRecords(): void {
    this.records$ = this.getRecords().subscribe(
      (res: any) => this.onRecordUpdate(res),
      (err: HttpErrorResponse | ErrorEvent) => this.onRecordError(err),
    );
  }

  callGetFolders(): void {
    this.records$ = this.getFolders().subscribe(
      (res: any) => this.onFoldersUpdate(res),
      (err: HttpErrorResponse | ErrorEvent) => this.onFoldersError(err),
    );
  }

  getRecords(): Observable<any> {
    return this.http.get<any>(this.urlAllFolders).pipe(
      retry(1),
      tap(data => console.log(`${ this.urlAllFolders }`, data)),
      map(data => data.releases),
    );
  }

  getFolders(): Observable<any> {
    return this.http.get<any>(this.urlFolders).pipe(
      retry(1),
      tap(data => console.log(`${ this.urlFolders }`, data)),
      map(data => data),
    );
  }

}
