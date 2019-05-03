import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NotFoundRoutingModule } from './not-found-routing.module';
import { NotFoundComponent } from './not-found.component';
import { SharedModule } from '../../../core/modules/shared/shared.module';

@NgModule({
  declarations: [ NotFoundComponent ],
  imports: [
    CommonModule,
    SharedModule,
    NotFoundRoutingModule
  ]
})
export class NotFoundModule { }
