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
  searchTerm;
  resultCount;

  constructor() {
    this.textContent = TEXT;
  }

  ngOnInit() {}

  matchCount(str, pattern) {
    const re = new RegExp(pattern, 'gi');
    return ((str || '').match(re) || []).length;
  }

  setSearch(searchTerm: string): void {
    const term = searchTerm.trim();
    const count = this.matchCount(this.textContent, term);
    this.setSearchTerm(term);
    this.setResultCount(count);
  }

  setSearchTerm(searchTerm: string): void {
    this.searchTerm = searchTerm;
  }

  setResultCount(count: number): void {
    this.resultCount = count;
  }

  navToGitHubProject(): boolean {
    window.open(
      GITHUB_SEARCH_HIGHLIGHT_PROJECT,
      '_blank' // <- This is what makes it open in a new window.
    );
    return false;
  }

  getResultCount(): number {
    return this.resultCount;
  }

  getSearchTerm(): string {
    return this.searchTerm;
  }

}