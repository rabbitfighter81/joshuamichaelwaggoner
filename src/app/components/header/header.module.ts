import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AppMaterialModule } from '../../core/modules/app-material/app-material.module';
import { AboutRoutingModule } from '../pages/about/about-routing.module';
import { HeaderComponent } from './header.component';

@NgModule({
  declarations: [HeaderComponent],
  imports: [CommonModule, AppMaterialModule, AboutRoutingModule],
  exports: [HeaderComponent],
})
export class HeaderModule {}
