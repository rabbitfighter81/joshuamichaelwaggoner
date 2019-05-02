import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AppMaterialModule } from 'src/app/core/modules/app-material/app-material.module';
import { GreyhoundsRoutingModule } from './greyhounds-routing.module';
import { GreyhoundsComponent } from './greyhounds.component';

@NgModule({
  declarations: [ GreyhoundsComponent ],
  imports: [
    AppMaterialModule,
    CommonModule,
    GreyhoundsRoutingModule
  ]
})
export class GreyhoundsModule { }
