import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable, OnDestroy, OnInit } from '@angular/core';
import { BehaviorSubject, Observable, Subscription } from 'rxjs';
import { map, retry } from 'rxjs/operators';
import { IDiscogRecord, Record } from '../../models/discogs-record.model';

@Injectable({
  providedIn: 'root',
})
export class DiscogsService implements OnInit, OnDestroy {
  logging = true;

  private records$: Subscription;
  records: BehaviorSubject<Record[]> = new BehaviorSubject<Record[]>([]);

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.callGetRecords();
  }

  ngOnDestroy() {
    if (this.records$ != null) {
      this.records$.unsubscribe();
    }
  }

  private onRecordUpdate(releases: any): void {
    // TODO: Type...
    if (releases && releases.length) {
      this.records.next(
        releases.map(
          (record: IDiscogRecord): Record => new Record(record),
        ),
      );
      if (this.logging) {
        console.log(`Records data from ${this.apiUrl}/records`, releases);
      }
    }
  }

  private onRecordError(error: any): void {
    if (this.logging) {
      console.log('Error fetching Record data from API: ', error);
    }
  }

  callGetRecords(): void {
    this.records$ = this.getRecords().subscribe(
      (res: any) => this.onRecordUpdate(res),
      (err: HttpErrorResponse | ErrorEvent) => this.onRecordError(err),
    );
  }

  getRecords(): Observable<any> {
    return this.http.get<any>(this.apiUrl).pipe(
      retry(1),
      map(data => data.releases),
    );
  }

  get apiUrl(): string {
    return `${window.location.origin}/api/records`;
  }
}
