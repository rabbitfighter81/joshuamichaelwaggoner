import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { AppMaterialModule } from '../../../core/modules/app-material/app-material.module';
import { TableDiscogsReleaseComponent } from './table-discogs-release.component';
import { PipesModule } from '../../../core/pipes/pipes.module';

@NgModule({
  declarations: [TableDiscogsReleaseComponent],
  imports: [AppMaterialModule, CommonModule, HttpClientModule, PipesModule],
  exports: [TableDiscogsReleaseComponent],
})
export class TableDiscogsReleaseModule {}
