import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from '../../app-routing.module';
import { AppMaterialModule } from '../../core/modules/app-material/app-material.module';
import { NavComponent } from './nav.component';

@NgModule({
  declarations: [NavComponent],
  imports: [AppMaterialModule, CommonModule, AppRoutingModule],
  exports: [NavComponent],
})
export class NavModule {}
