import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RandomColorPipe } from './random-color/random-color.pipe';
import { SafePipe } from './safe/safe.pipe';
import { SearchHighlightPipe } from './search-highlight/search-highlight.pipe';

const pipes = [RandomColorPipe, SearchHighlightPipe, SafePipe];

@NgModule({
  imports: [CommonModule],
  declarations: [...pipes],
  exports: [...pipes],
})
export class PipesModule {}
