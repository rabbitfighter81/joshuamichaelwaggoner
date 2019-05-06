import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header.component';
import { AboutRoutingModule } from '../pages/about/about-routing.module';
import { AppMaterialModule } from '../../core/modules/app-material/app-material.module';

@NgModule({
  declarations: [HeaderComponent],
  imports: [CommonModule, AppMaterialModule, AboutRoutingModule],
  exports: [HeaderComponent],
})
export class HeaderModule {}
