import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AppMaterialModule } from '../../core/modules/app-material/app-material.module';
import { AboutRoutingModule } from '../pages/about/about-routing.module';
import { FooterComponent } from './footer.component';

@NgModule({
  declarations: [FooterComponent],
  imports: [CommonModule, AppMaterialModule, AboutRoutingModule],
  exports: [FooterComponent],
})
export class FooterModule {}
