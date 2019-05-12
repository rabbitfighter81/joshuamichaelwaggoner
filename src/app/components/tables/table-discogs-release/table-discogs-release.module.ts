import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { AppMaterialModule } from '../../../core/modules/app-material/app-material.module';
import { TableDiscogsReleaseComponent } from './table-discogs-release.component';
import { SafePipe } from 'src/app/core/pipes/safe/safe.pipe';
import { PipesModule } from '../../../core/pipes/pipes.module';

@NgModule({
  declarations: [TableDiscogsReleaseComponent],
  imports: [AppMaterialModule, CommonModule, HttpClientModule, PipesModule],
  exports: [TableDiscogsReleaseComponent],
})
export class TableDiscogsReleaseModule { }
