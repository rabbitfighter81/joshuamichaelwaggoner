import { GITHUB_LINK } from './../../app.constants';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-toolbar-main',
  templateUrl: './toolbar-main.component.html',
  styleUrls: ['./toolbar-main.component.scss']
})
export class ToolbarMainComponent implements OnInit {

  @Output() open: EventEmitter<any> = new EventEmitter();
  @Output() close: EventEmitter<any> = new EventEmitter();

  constructor() { }

  visible = false;

  ngOnInit() {
    setTimeout(() => {
      this.toggleMenuNav();
    }, 500);
  }

  toggleMenuNav(): void {
    this.visible = !this.visible;
    if (this.visible) {
      this.open.emit(null);
    } else {
      this.close.emit(null);
    }
  }

  navToGitHubProject(): boolean {
    window.open(
      GITHUB_LINK,
      '_blank' // <- This is what makes it open in a new window.
    );
    return false;
  }

}
