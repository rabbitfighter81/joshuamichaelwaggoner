import { AfterViewInit, Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { unsubscribeAll } from '../../../core/helpers/unsubscribe.helper';
import { DiscogsService } from '../../../core/services/discogs/discogs.service';

@Component({
  selector: 'app-discogs',
  templateUrl: './discogs.component.html',
  styleUrls: ['./discogs.component.scss']
})
export class DiscogsComponent implements OnInit, AfterViewInit, OnDestroy {

  private records$: Subscription;
  records: any;

  constructor(private discogsService: DiscogsService) { }

  ngOnInit() {
    this.records$ = this.discogsService.records.subscribe(next => this.onRecordsUpdate(next));
  }

  ngAfterViewInit() {
    this.discogsService.callGetRecords();
  }

  ngOnDestroy() {
    const subscriptions = [
      this.records$,
    ];
    unsubscribeAll(subscriptions);
  }

  onRecordsUpdate(records: any): void {
    if (records) {
      this.records = records;
    }
  }

}
