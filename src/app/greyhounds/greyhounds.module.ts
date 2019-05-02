import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GreyhoundsRoutingModule } from './greyhounds-routing.module';
import { GreyhoundsComponent } from './greyhounds.component';
import { AppMaterialModule } from '../modules/app-material/app-material.module';

@NgModule({
  declarations: [ GreyhoundsComponent ],
  imports: [
    AppMaterialModule,
    CommonModule,
    GreyhoundsRoutingModule
  ]
})
export class GreyhoundsModule { }
