import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { GreyhoundsRoutingModule } from './greyhounds-routing.module';
import { GreyhoundsComponent } from './greyhounds.component';
import { CommonModule } from '@angular/common';
import { AppMaterialModule } from '../../../core/modules/app-material/app-material.module';

@NgModule({
  imports: [
    CommonModule,
    AppMaterialModule,
    GreyhoundsRoutingModule
  ],
  declarations: [ GreyhoundsComponent ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class GreyhoundsModule { }
