import { Component, OnInit, Input, AfterViewInit } from '@angular/core';
import { Release } from '../../../core/models/release.model';
import { ViewEncapsulation, ViewChild, ElementRef, PipeTransform, Pipe } from '@angular/core';


@Component({
  selector: 'app-table-discogs-release',
  templateUrl: './table-discogs-release.component.html',
  styleUrls: ['./table-discogs-release.component.scss']
})
export class TableDiscogsReleaseComponent implements OnInit, AfterViewInit {

  @Input() public release: Release;

  constructor() {}

  ngOnInit() {
    // console.log('xxx', this.release);
  }

  ngAfterViewInit() {
    // console.log('xxx', this.release);
  }

}
