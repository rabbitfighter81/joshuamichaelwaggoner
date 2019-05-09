import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../../../core/modules/shared/shared.module';
import { RecordCardComponent } from './record-card.component';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    RouterModule
  ],
  exports: [ RecordCardComponent ],
  declarations: [ RecordCardComponent ]
})
export class RecordCardModule { }
