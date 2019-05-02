import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './footer.component';
import { AppMaterialModule } from '../../core/modules/app-material/app-material.module';
import { AboutRoutingModule } from '../pages/about/about-routing.module';

@NgModule({
  declarations: [ FooterComponent ],
  imports: [
    CommonModule,
    AppMaterialModule,
    AboutRoutingModule
  ],
  exports: [ FooterComponent ]
})
export class FooterModule { }

