import { Component, OnInit } from '@angular/core';
import { GITHUB_SEARCH_HIGHLIGHT_PROJECT } from './../../../app.constants';

const TEXT =
'Luke Skywalker has vanished. In his absence, the sinister FIRST ORDER has risen from the ashes of the ' +
'Empire and will not rest until Skywalker, the last Jedi, has been destroyed. ' +
'With the support of the REPUBLIC, General Leia Organa leads a brave RESISTANCE. ' +
'She is desperate to find her brother Luke and gain his help in restoring peace and justice to the galaxy. ' +
'Leia has sent her most daring pilot on a secret mission to Jakku, where an old ally has discovered a clue to Luke’s whereabouts...';

@Component({
  selector: 'app-search-highlight',
  templateUrl: './search-highlight.component.html',
  styleUrls: ['./search-highlight.component.scss']
})
export class SearchHighlightComponent implements OnInit {

  textContent: string;
  searchTerm: string;
  resultCount: number;

  constructor() {
    this.textContent = TEXT;
  }

  ngOnInit() {}

  matchCount(str: string, pattern: string): number {
    const re = new RegExp(pattern, 'gi');
    return ((str || '').match(re) || []).length;
  }

  setSearch(searchTerm: string): void {
    const term = searchTerm.trim();
    this.setSearchTerm(term ? term : '');
    this.setResultCount(term ? this.matchCount(this.textContent, term) : 0);
  }

  setSearchTerm(searchTerm: string): void {
    this.searchTerm = searchTerm;
  }

  setResultCount(count: number): void {
    this.resultCount = count;
  }

  toggleLike(): void {
    console.log('Likes coming soon...');
  }

  share(): void {
    console.log('Share coming soon...');
  }

  navToGitHubProject(): void {
    window.open(GITHUB_SEARCH_HIGHLIGHT_PROJECT, '_blank');
  }

  getResultCount(): number {
    return this.resultCount;
  }

  getSearchTerm(): string {
    return this.searchTerm || '';
  }

}
