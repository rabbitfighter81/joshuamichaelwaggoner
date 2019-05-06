import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableGreyhoundComponent } from './table-greyhound.component';
import { AppMaterialModule } from '../../../core/modules/app-material/app-material.module';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [TableGreyhoundComponent],
  imports: [AppMaterialModule, CommonModule, HttpClientModule],
  exports: [TableGreyhoundComponent],
})
export class TableGreyhoundModule {}
