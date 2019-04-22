import { Action } from '@ngrx/store';
import { assign } from 'lodash';

export const SET_RESULT_COUNT = 'SET_RESULT_COUNT';
export const SET_SEARCH_TERM = 'SET_SEARCH_TERM';

export interface ISearchHighlight {
  resultCount: number;
  searchTerm: string;
}

const initialState: ISearchHighlight = {
  resultCount: 0,
  searchTerm: ''
};

export function searchHighlightReducer(state: ISearchHighlight = initialState, action: Action) {
  switch (action.type) {

    case SET_RESULT_COUNT: {
      const resultCount = (action as any).payload;
      return assign({}, state, {
        resultCount
      });
    }

    case SET_SEARCH_TERM: {
      const searchTerm = (action as any).payload;
      console.log(searchTerm);
      return assign({}, state, {
        searchTerm
      });
    }

    default:
      return state;
  }
}
