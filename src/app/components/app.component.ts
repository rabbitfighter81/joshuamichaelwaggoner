import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  toolbarOpened = false;

  constructor() {}
  ngOnInit() {}

  onOpen() {
    this.toolbarOpened = true;
  }

  onClose() {
    this.toolbarOpened = false;
  }
}
