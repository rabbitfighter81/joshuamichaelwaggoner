import { GITHUB_LINK } from './../../app.constants';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-toolbar-main',
  templateUrl: './toolbar-main.component.html',
  styleUrls: ['./toolbar-main.component.scss']
})
export class ToolbarMainComponent implements OnInit {

  @Output() toggle: EventEmitter<any> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  toggleSidenav(): void {
    this.toggle.emit();
  }

  toggleSettings(): void { // TODO: future...
    console.log('Settings');
  }

  navToGitHubProject(): void {
    window.open(GITHUB_LINK, '_blank'); // TODO future...
  }

}
