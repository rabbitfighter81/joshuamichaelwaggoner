import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { GreyhoundsRoutingModule } from './greyhounds-routing.module';
import { GreyhoundsComponent } from './greyhounds.component';
import { SharedModule } from '../../../core/modules/shared/shared.module';

@NgModule({
  declarations: [ GreyhoundsComponent ],
  imports: [
    SharedModule,
    CommonModule,
    GreyhoundsRoutingModule
  ]
})
export class GreyhoundsModule { }
