import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss'],
})
export class NavComponent implements OnInit {

  @Output() linkSelected: EventEmitter<any> = new EventEmitter();

  constructor() {}

  ngOnInit() {}

  selected(link?: string): void {
    this.linkSelected.emit({ link: link ? link : null }); // TODO: Decision...
  }
}
