import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from '../../app-routing.module';
import { NavComponent } from './nav.component';
import { AppMaterialModule } from 'src/app/core/modules/app-material/app-material.module';

@NgModule({
  declarations: [ NavComponent ],
  imports: [
    AppMaterialModule,
    CommonModule,
    AppRoutingModule
  ],
  exports: [ NavComponent ]
})
export class NavModule { }

