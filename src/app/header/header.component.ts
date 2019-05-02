import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

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
    // window.open(GITHUB_LINK, '_blank'); // TODO future...
  }

}
