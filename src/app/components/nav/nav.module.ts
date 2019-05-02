import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { AppMaterialModule } from 'src/app/core/modules/app-material/app-material.module';
import { PipesModule } from 'src/app/components/pipes/pipes.module';
import { NavComponent } from './nav.component';

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

