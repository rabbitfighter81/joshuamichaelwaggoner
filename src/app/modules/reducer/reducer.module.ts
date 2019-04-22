import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { StoreModule } from '@ngrx/store';
import { searchHighlightReducer } from '../../reducers/search-highlight/search-highlight.reducer';

const reducers = {
  searchHighlight: searchHighlightReducer
};

@NgModule({
  imports: [
    BrowserModule,
    StoreModule.forRoot(reducers)
  ],
  exports: [
    BrowserModule,
    StoreModule
  ],
})
export class ReducerModule { }
