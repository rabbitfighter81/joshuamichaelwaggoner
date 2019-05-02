import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavComponent } from './nav.component';

import { ReactiveFormsModule } from '@angular/forms';
import { AppMaterialModule } from 'src/app/modules/app-material/app-material.module';
import { PipesModule } from 'src/app/pipes/pipes.module';
import { AppRoutingModule } from 'src/app/app-routing.module';

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

