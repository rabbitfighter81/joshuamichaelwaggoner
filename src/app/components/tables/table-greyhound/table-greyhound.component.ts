import { Component, OnInit, Input } from '@angular/core';
import { Greyhound } from '../../../core/models/greyhound.model';

@Component({
  selector: 'app-table-greyhound',
  templateUrl: './table-greyhound.component.html',
  styleUrls: ['./table-greyhound.component.scss'],
})
export class TableGreyhoundComponent implements OnInit {

  @Input() public greyhound: Greyhound;

  constructor() {}

  ngOnInit() {}
}
