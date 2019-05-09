import { Injectable, OnInit, OnDestroy } from '@angular/core';
import { Subscription, BehaviorSubject, Observable } from 'rxjs';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { retry, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class DiscogsService implements OnInit, OnDestroy {
  logging = true;

  private records$: Subscription;
  records: BehaviorSubject<any> = new BehaviorSubject<any>([]);

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.callGetRecords();
  }

  ngOnDestroy() {
    if (this.records$ != null) {
      this.records$.unsubscribe();
    }
  }

  private onRecordUpdate(response: any): void {
    // TODO: Type...
    if (response) {
      this.records.next(response);
      if (this.logging) {
        console.log(`Records data from ${this.apiUrl}`, response);
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
      map(data => data),
    );
  }

  get apiUrl(): string {
    return `${window.location.origin}/api/records`;
  }
}
