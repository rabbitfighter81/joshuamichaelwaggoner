import { AfterViewInit, Component, OnDestroy, OnInit } from '@angular/core';
import { PageEvent } from '@angular/material';
import { Subscription } from 'rxjs';
import { unsubscribeAll } from '../../../core/helpers/unsubscribe.helper';
import { Pagination } from '../../../core/models/pagination.model';
import { DiscogsService } from '../../../core/services/discogs/discogs.service';
import { smoothScrollTop } from '../../../core/helpers/smooth-scroll-top';

@Component({
  selector: 'app-discogs',
  templateUrl: './discogs.component.html',
  styleUrls: ['./discogs.component.scss']
})
export class DiscogsComponent implements OnInit, AfterViewInit, OnDestroy {

  private pagination$: Subscription;
  private records$: Subscription;
  private totalRecords$: Subscription;

  pagination: any;
  records: any;
  totalRecords: number;

  // Paginator Settings : TODO... Temp!
  pageSize = 10;
  pageSizeOptions: number[] = [5, 10, 25];

  // MatPaginator Output
  // pageEvent: PageEvent;

  constructor(private discogsService: DiscogsService) { }

  ngOnInit() {
    this.pagination$ = this.discogsService.pagination.subscribe(next => this.onPageUpdate(next));
    this.records$ = this.discogsService.records.subscribe(next => this.onRecordsUpdate(next));
    this.totalRecords$ = this.discogsService.totalRecords.subscribe(next => this.totalRecords = next);
  }

  ngAfterViewInit() {
    this.discogsService.callGetFolders();
  }

  ngOnDestroy() {
    const subscriptions = [
      this.pagination$,
      this.records$,
      this.totalRecords$,
    ];
    unsubscribeAll(subscriptions);
  }

  private onRecordsUpdate(records: any): void {
    if (records) {
      this.records = records;
    }
  }

  private onPageUpdate(pagination: Pagination): void {
    if (pagination) {
      this.pagination = pagination;
      this.discogsService.callGetRecords(pagination);
      smoothScrollTop();
    }
  }

  setPagination(event: PageEvent): void {
    this.discogsService.setPagination(event);
  }

}
