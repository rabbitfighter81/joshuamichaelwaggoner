import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  @Output() toggle: EventEmitter<any> = new EventEmitter();

  githubLink = 'https://github.com/rabbitfighter81/joshuamichaelwaggoner';

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

  setLocale(code: string): void {
    const url = '/' + code + '/';
    window.location.href = url;
  }

  navToGitHubProject(): void {
    window.open(this.githubLink, '_blank');
  }

}
