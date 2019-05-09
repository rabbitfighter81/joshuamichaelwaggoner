import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-record-card',
  templateUrl: './record-card.component.html',
  styleUrls: ['./record-card.component.scss']
})
export class RecordCardComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  setRecordDetail(record: string): void {
    console.log('Setting record detail for ' + record);
  }

}
