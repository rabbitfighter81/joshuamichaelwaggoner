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
    /*
    setTimeout(() => {
      this.toggleSidenav();
    }, 1000);
    */
  }

  toggleSidenav(): void {
    this.toggle.emit();
  }

  toggleSettings(): void {
    console.log('Settings');
  }

  navToGitHubProject(): boolean {
    window.open(GITHUB_LINK,'_blank');
    return false;
  }

}
