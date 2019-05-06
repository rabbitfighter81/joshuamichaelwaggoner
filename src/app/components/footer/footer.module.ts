import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './footer.component';
import { AboutRoutingModule } from '../pages/about/about-routing.module';
import { AppMaterialModule } from '../../core/modules/app-material/app-material.module';

@NgModule({
  declarations: [FooterComponent],
  imports: [CommonModule, AppMaterialModule, AboutRoutingModule],
  exports: [FooterComponent],
})
export class FooterModule {}
