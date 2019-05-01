import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppMaterialModule } from '../modules/app-material/app-material.module';
import { NavComponent } from './nav.component';
import { AppRoutingModule } from '../app-routing.module';
import { PipesModule } from '../pipes/pipes.module';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [ NavComponent ],
  imports: [
    AppMaterialModule,
    CommonModule,
    PipesModule,
    ReactiveFormsModule,
    AppRoutingModule
  ],
  exports: [ NavComponent ]
})
export class NavModule { }

