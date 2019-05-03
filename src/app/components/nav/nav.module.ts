import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from '../../app-routing.module';
import { NavComponent } from './nav.component';
import { SharedModule } from '../../core/modules/shared/shared.module';

@NgModule({
  declarations: [ NavComponent ],
  imports: [
    SharedModule,
    CommonModule,
    ReactiveFormsModule,
    AppRoutingModule
  ],
  exports: [ NavComponent ]
})
export class NavModule { }

