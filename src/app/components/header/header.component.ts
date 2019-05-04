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

  constructor(private router: Router) { }

  ngOnInit() {
  }

  toggleSidenav(): void {
    this.toggle.emit();
  }

  selectLanguage(code: string): void {
    this.router.navigate(['/' + code + '/']);
  }

  navToGitHubProject(): void {
    window.open(this.githubLink, '_blank');
  }

}
