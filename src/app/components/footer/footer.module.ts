import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './footer.component';
import { AboutRoutingModule } from '../pages/about/about-routing.module';
import { SharedModule } from '../../core/modules/shared/shared.module';

@NgModule({
  declarations: [ FooterComponent ],
  imports: [
    CommonModule,
    SharedModule,
    AboutRoutingModule
  ],
  exports: [ FooterComponent ]
})
export class FooterModule { }

