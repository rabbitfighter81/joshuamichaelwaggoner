import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../../../core/modules/shared/shared.module';
import { RecordDetailComponent } from './record-detail.component';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    RouterModule
  ],
  exports: [ RecordDetailComponent ],
  declarations: [ RecordDetailComponent ]
})
export class RecordDetailModule { }
