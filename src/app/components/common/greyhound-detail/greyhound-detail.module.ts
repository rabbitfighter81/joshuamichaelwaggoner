import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { GreyhoundDetailComponent } from './greyhound-detail.component';
import { SharedModule } from 'src/app/core/modules/shared/shared.module';
import { RouterModule } from '@angular/router';
import { TableGreyhoundModule } from '../../tables/table-greyhound/table-greyhound.module';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    RouterModule,
    TableGreyhoundModule
  ],
  exports: [ GreyhoundDetailComponent ],
  declarations: [ GreyhoundDetailComponent ]
})
export class GreyhoundDetailModule { }
