import { CommonModule } from '@angular/common';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { SharedModule } from '../../../core/modules/shared/shared.module';
import { GreyhoundsRoutingModule } from './greyhounds-routing.module';
import { GreyhoundsComponent } from './greyhounds.component';

@NgModule({
  declarations: [ GreyhoundsComponent ],
  imports: [
    SharedModule,
    CommonModule,
    GreyhoundsRoutingModule
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class GreyhoundsModule { }
