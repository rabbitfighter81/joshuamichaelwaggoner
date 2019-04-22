import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { GITHUB_SEARCH_HIGHLIGHT_PROJECT } from './../../../app.constants';
import { ISearchHighlight, SET_RESULT_COUNT, SET_SEARCH_TERM } from './../../../reducers/search-highlight/search-highlight.reducer';

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

  store$: Observable<ISearchHighlight>;
  state: ISearchHighlight;

  textContent: string;

  constructor(private store: Store<ISearchHighlight>) {
    this.store$ = store.pipe(select('searchHighlight'));
    this.store$.subscribe(state => {
      this.state = state;
    });
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
    this.store.dispatch({
      type: SET_SEARCH_TERM,
      payload: searchTerm
    });
  }

  setResultCount(count: number): void {
    this.store.dispatch({
      type: SET_RESULT_COUNT,
      payload: count
    });
  }

  navToGitHubProject(): boolean {
    window.open(
      GITHUB_SEARCH_HIGHLIGHT_PROJECT,
      '_blank' // <- This is what makes it open in a new window.
    );
    return false;
  }

  getResultCount(): number {
    return this.state.resultCount;
  }

  getSearchTerm(): string {
    return this.state.searchTerm;
  }

}
