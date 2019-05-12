import { Component, Input, OnInit, AfterViewInit } from '@angular/core';
import { Router } from '@angular/router';
import { Record } from '../../../core/models/discogs-record.model';

@Component({
  selector: 'app-record-card',
  templateUrl: './record-card.component.html',
  styleUrls: ['./record-card.component.scss']
})
export class RecordCardComponent implements OnInit, AfterViewInit {

  @Input() public record: Record; // TODO: Type...

  constructor(private router: Router) { }

  ngOnInit() {
  }

  ngAfterViewInit() {
    // console.log('[RecordCardComponent]: Record', this.record);
  }

  like(): void {
    console.log('Liking ', this.record);
  }

  share(): void {
    console.log('Sharing ', this.record);
  }

  setRecordDetail(recordId: string): void {
    this.router.navigate(['/discogs', recordId]);
  }


}
