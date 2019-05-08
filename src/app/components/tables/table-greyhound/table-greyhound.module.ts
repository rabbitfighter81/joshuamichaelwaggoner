import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { AppMaterialModule } from '../../../core/modules/app-material/app-material.module';
import { TableGreyhoundComponent } from './table-greyhound.component';

@NgModule({
  declarations: [TableGreyhoundComponent],
  imports: [AppMaterialModule, CommonModule, HttpClientModule],
  exports: [TableGreyhoundComponent],
})
export class TableGreyhoundModule {}
