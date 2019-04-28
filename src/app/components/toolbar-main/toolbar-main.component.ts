import { GITHUB_LINK } from './../../app.constants';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-toolbar-main',
  templateUrl: './toolbar-main.component.html',
  styleUrls: ['./toolbar-main.component.scss']
})
export class ToolbarMainComponent implements OnInit {

  @Output() toggle: EventEmitter<any> = new EventEmitter();

  languageList = [
    { code: 'en', label: 'English' },
    { code: 'es', label: 'Español' },
    { code: 'de', label: 'Deutsch' },
  ];

  constructor() { }

  ngOnInit() {
  }

  toggleSidenav(): void {
    this.toggle.emit();
  }

  toggleLanguage(): void { // TODO: future...
    console.log('Language');
  }

  navToGitHubProject(): void {
    window.open(GITHUB_LINK, '_blank'); // TODO future...
  }

}
